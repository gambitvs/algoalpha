/**
 * scrape-myfxbook.ts
 *
 * Runs daily via .github/workflows/update-myfxbook.yml.
 *
 * Loads https://www.myfxbook.com/members/AlgoAlpha through a stealth-bypassed
 * real Chrome (puppeteer-real-browser), which defeats Cloudflare's managed
 * challenge. Extracts each tracked account's gain % and max drawdown %, merges
 * them into lib/myfxbook-data.json (preserving the other stat fields we don't
 * scrape), and writes the file back with a fresh `lastScraped` timestamp.
 *
 * The workflow commits the file when it differs, triggering a redeploy, so the
 * homepage always shows data that's at most 24 hours old.
 */
import { connect } from "puppeteer-real-browser";
import fs from "node:fs/promises";
import path from "node:path";

const PROFILE_URL = "https://www.myfxbook.com/members/AlgoAlpha";
const DATA_PATH = path.join(process.cwd(), "lib/myfxbook-data.json");
const TURNSTILE_TIMEOUT_MS = 60_000;

interface Scraped {
  id: string;
  gain: string;
  drawdown: string;
}

async function scrape(): Promise<Scraped[]> {
  const { browser, page } = await connect({
    headless: false,
    fingerprint: true,
    turnstile: true,
    tf: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  } as Parameters<typeof connect>[0]);

  try {
    await page.goto(PROFILE_URL, {
      waitUntil: "domcontentloaded",
      timeout: TURNSTILE_TIMEOUT_MS,
    });

    // Wait for the systems table to render after Turnstile resolves.
    // The profile lists systems via links to /members/AlgoAlpha/<slug>/<id>.
    await page.waitForFunction(
      () =>
        document.body?.innerText?.includes("Systems by") ||
        !!document.querySelector('a[href*="/members/AlgoAlpha/"]'),
      { timeout: TURNSTILE_TIMEOUT_MS },
    );

    // Give the table a beat to fully populate numeric columns.
    await new Promise((r) => setTimeout(r, 5_000));

    // Diagnostic: dump the rendered HTML so we can iterate on selectors if the
    // extraction pass finds nothing. Committed under scripts/.debug/ (gitignored).
    const html = await page.content();
    const debugDir = path.join(process.cwd(), "scripts/.debug");
    await fs.mkdir(debugDir, { recursive: true });
    await fs.writeFile(path.join(debugDir, "profile.html"), html);

    const results = await page.evaluate(() => {
      const out: {
        id: string;
        gain: string;
        drawdown: string;
        source: string;
      }[] = [];
      const seen = new Set<string>();

      // Strategy 1: Anchor-based — find account links, walk up to the row.
      const anchors = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(
          'a[href*="/members/AlgoAlpha/"], a[href*="/portfolio/"]',
        ),
      );
      for (const a of anchors) {
        const m = a.href.match(/\/(\d{7,9})(?:\b|\/|$|\?)/);
        if (!m) continue;
        const id = m[1];
        if (seen.has(id)) continue;

        // Try successively wider containers.
        const containers = [
          a.closest("tr"),
          a.closest("[role='row']"),
          a.closest(".systems-row, .system-row, .system"),
          a.parentElement?.parentElement,
          a.parentElement?.parentElement?.parentElement,
        ].filter((el): el is Element => !!el);

        for (const c of containers) {
          const text = c.textContent ?? "";
          const pcts = Array.from(
            text.matchAll(/([+-]?\d[\d,]*\.?\d*)\s*%/g),
          ).map((x) => x[1].replace(/,/g, ""));
          if (pcts.length >= 2) {
            seen.add(id);
            out.push({
              id,
              gain: pcts[0].replace(/^\+/, ""),
              drawdown: pcts[1].replace(/^\+/, ""),
              source: "anchor-walk",
            });
            break;
          }
        }
      }

      // Strategy 2: Fallback — regex sweep of body text. For each known id,
      // locate it and capture the nearest two % values.
      if (out.length === 0) {
        const body = document.body.innerText;
        const ids = [
          "11755904",
          "11756098",
          "11758658",
          "11758739",
          "11972920",
          "11980516",
          "11993743",
        ];
        for (const id of ids) {
          const idx = body.indexOf(id);
          if (idx === -1) continue;
          // Look 500 chars after the id (typical row width).
          const slice = body.slice(idx, idx + 800);
          const pcts = Array.from(
            slice.matchAll(/([+-]?\d[\d,]*\.?\d*)\s*%/g),
          ).map((x) => x[1].replace(/,/g, ""));
          if (pcts.length >= 2 && !seen.has(id)) {
            seen.add(id);
            out.push({
              id,
              gain: pcts[0].replace(/^\+/, ""),
              drawdown: pcts[1].replace(/^\+/, ""),
              source: "body-text-fallback",
            });
          }
        }
      }

      return out;
    });

    console.log("Extracted:", JSON.stringify(results, null, 2));
    return results.map(({ id, gain, drawdown }) => ({ id, gain, drawdown }));
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log(`[${new Date().toISOString()}] Scraping ${PROFILE_URL}`);
  const scraped = await scrape();
  console.log(`Scraped ${scraped.length} systems`);

  if (scraped.length === 0) {
    throw new Error("No systems extracted — page structure may have changed.");
  }

  const raw = await fs.readFile(DATA_PATH, "utf8");
  const data = JSON.parse(raw) as {
    lastScraped: string;
    accounts: Array<Record<string, unknown> & { id: string }>;
  };

  let updated = 0;
  for (const acct of data.accounts) {
    const match = scraped.find((s) => s.id === acct.id);
    if (!match) {
      console.warn(`No match for account ${acct.id} (${acct.name})`);
      continue;
    }
    if (acct.gain !== match.gain || acct.drawdown !== match.drawdown) {
      console.log(
        `  ${acct.name}: gain ${acct.gain} -> ${match.gain}, dd ${acct.drawdown} -> ${match.drawdown}`,
      );
      acct.gain = match.gain;
      acct.drawdown = match.drawdown;
      updated++;
    }
  }

  data.lastScraped = new Date().toISOString();

  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2) + "\n");
  console.log(`Wrote ${DATA_PATH} (${updated} value changes)`);
}

main().catch((err) => {
  console.error("Scrape failed:", err);
  process.exit(1);
});
