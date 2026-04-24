import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gold Alpha — Book a Private Call",
  description:
    "Install Our Gold AI Trading Algorithm to Your Portfolio That Generates Monthly Profits With 'Hands-Off' Management. Exclusive for high-net-worth executives.",
  robots: { index: false, follow: true },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Algo Alpha",
    title: "Gold Alpha — Book a Private Call",
    description:
      "Install Our Gold AI Trading Algorithm to Your Portfolio. Exclusive for high-net-worth executives.",
    images: [
      {
        url: "/images/og-algoalpha.png",
        width: 1200,
        height: 630,
        alt: "Algo Alpha — Your Portfolio, Empowered by Institutional Trading Algorithms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Alpha — Book a Private Call",
    description:
      "Install Our Gold AI Trading Algorithm to Your Portfolio. Exclusive for high-net-worth executives.",
    images: ["/images/og-algoalpha.png"],
  },
};

const GTM_ID = "GTM-WCCRS5V";
const FB_PIXEL_ID_1 = "2150788458455465";
const FB_PIXEL_ID_2 = "896857669696207";
const TIKTOK_PIXEL_ID = "CHT1FP3C77U0O25ES74G";
const VIBE_PIXEL_ID = "9lR8G5";
const HYROS_URL =
  "https://215917.t.hyros.com/v1/lst/universal-script?ph=39685c527d1ff50f68caf441cff1bda565b122d272e2cd0439fd4551af51ccd3&tag=!clicked";

export default function GoldDirectBookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Facebook Pixel (dual-pixel) */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID_1}');
fbq('init', '${FB_PIXEL_ID_2}');
fbq('track', 'PageView');`}
      </Script>

      {/* TikTok Pixel */}
      <Script id="tt-pixel" strategy="afterInteractive">
        {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('${TIKTOK_PIXEL_ID}');
  ttq.page();
}(window, document, 'ttq');`}
      </Script>

      {/* Vibe Pixel */}
      <Script id="vibe-pixel" strategy="afterInteractive">
        {`!function(v,i,b,e,c,o){if(!v[c]){var s=v[c]=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)};s.queue=[],s.b=1*new Date;var t=i.createElement(b);t.async=!0,t.src=e;var n=i.getElementsByTagName(b)[0];n.parentNode.insertBefore(t,n)}}(window,document,"script","https://s.vibe.co/vbpx.js","vbpx");
vbpx('init','${VIBE_PIXEL_ID}');
vbpx('event', 'page_view');`}
      </Script>

      {/* Hyros tracking */}
      <Script id="hyros" strategy="afterInteractive">
        {`var head = document.head;
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "${HYROS_URL}&ref_url=" + encodeURI(document.URL);
head.appendChild(script);`}
      </Script>

      {/* noscript fallbacks */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID_1}&ev=PageView&noscript=1`}
        />
      </noscript>

      {children}
    </>
  );
}
