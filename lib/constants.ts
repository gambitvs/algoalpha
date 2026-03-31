// lib/constants.ts — Algo Alpha data constants

import type {
  Strategy,
  Testimonial,
  TeamMember,
  ClientResult,
  VideoResource,
  SocialLink,
  NavItem,
} from "./types";

// ---------------------------------------------------------------------------
// 7.2 Strategy Data
// ---------------------------------------------------------------------------

export const strategies: Strategy[] = [
  {
    name: "Alpha X",
    slug: "alpha-x",
    description:
      "This trading software has two settings; Conservative and Moderate.",
    variants: [
      {
        settings: "Conservative",
        market: "21 Total Unique Pairs Between FX, Gold",
        returnYTD: "35% YTD 2025",
        positionSize: "Designed For $20,000+",
        screenshotPath: "/images/alpha-x-conservative.png",
      },
      {
        settings: "Moderate",
        market: "21 Total Unique Pairs Between FX, Gold",
        returnYTD: "350% YTD 2025",
        positionSize: "Designed For $20,000+",
        screenshotPath: "/images/alpha-x-moderate.png",
      },
    ],
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    variants: [
      {
        settings: "Aggressive",
        market: "Crypto FX",
        returnYTD: "17.5% YTD 2025",
        positionSize: "Designed For $50,000+",
        screenshotPath: "/images/crypto-alpha.png",
      },
    ],
  },
  {
    name: "Alpha Trader",
    slug: "alpha-trader",
    variants: [
      {
        settings: "Aggressive",
        market: "Crypto FX",
        returnYTD: "18.35% YTD 2025",
        positionSize: "Designed For $50,000+",
        screenshotPath: "/images/alpha-trader.png",
      },
    ],
  },
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    description:
      "This trading software is a single asset trading software with a moderate risk profile.",
    variants: [
      {
        settings: "Conservative",
        market: "XAU/USD",
        returnYTD: "1306% for 2025, February 24th YTD: 93.5%",
        positionSize: "Designed For $20,000+",
        screenshotPath: "/images/gold-alpha.png",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 7.3 Testimonial Data
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    name: "Robert J Miller",
    title: "Founder of Algo Alpha",
    quote:
      "There are very few things that I put my face on, because I care about reputation. I noticed many competitors didn't have adequate risk controls on their technology, so I dove in head on full time to help investors have great returns with proper risk management in place!",
    imagePath: "/images/robert-miller-hero.jpg",
    type: "founder",
  },
  {
    name: "Ron Franklin",
    title: "Retiree",
    quote:
      "Once we got onboarded, trading was simple and easy. Robert and his team have been very helpful as this is all new for me.",
    imagePath: "/images/ron-franklin.png",
    type: "client",
  },
  {
    name: "Bill Corp",
    title: "Full Time Investor",
    quote:
      "Every chance I get to communicate with the team they always overdeliver value. The returns have been great but the service has made this a no-brainer!",
    imagePath: "/images/bill-corp.png",
    type: "client",
  },
];

// ---------------------------------------------------------------------------
// 7.4 Team Data
// ---------------------------------------------------------------------------

export const team: TeamMember[] = [
  {
    name: "Robert Miller",
    title: "CEO",
    bio: "Robert is the founder and CEO of Algo Alpha. With deep experience in algorithmic trading and hedge fund technology, he leads the company's mission to make institutional-grade trading accessible to individual investors.",
    imagePath: "/images/robert-miller-profile.jpg",
    socialLinks: [], // Placeholder until real links provided
  },
  {
    name: "Wences Navarro",
    title: "Director of Business Development",
    bio: "Wences drives Algo Alpha's growth and client relationships as Director of Business Development, ensuring every member receives exceptional support throughout their journey.",
    imagePath: "/images/wences-navarro.png",
    socialLinks: [],
  },
];

// ---------------------------------------------------------------------------
// 7.5 About Page Client Results
// ---------------------------------------------------------------------------

export const clientResults: ClientResult[] = [
  {
    name: "Aaron",
    returnPercent: "+73.3%",
    description:
      "Taking profits in your portfolio is key, and our intention is to avoid downside risk to take advantage of market returns.",
    imagePath: "/images/client-aaron.png",
  },
  {
    name: "Erick",
    returnPercent: "+41.5%",
    description:
      "Taking profits in your portfolio is key, and our intention is to avoid downside risk to take advantage of market returns.",
    imagePath: "/images/client-erick.png",
  },
  {
    name: "Grant",
    returnPercent: "+26%",
    description:
      "Taking profits in your portfolio is key, and our intention is to avoid downside risk to take advantage of market returns.",
    imagePath: "/images/client-grant.png",
  },
];

// ---------------------------------------------------------------------------
// 7.6 Video Resources
// ---------------------------------------------------------------------------

export const videos: VideoResource[] = [
  {
    title: "The Rise of Alternative Assets and Trading Algorithms!",
    description:
      "In this Keynote presentation in Los Angeles, California, Robert Miller, the founder of Algo Alpha, shares how alternative ways of investing are on the rise and where trading algorithms fit into the more significant investment industry!",
    youtubeId: "vsup7V6v-Zo",
    channel: "Algo Alpha",
  },
  {
    title: "Bitcoin is the Future of Investing",
    description:
      "In this segment, Robert goes over why he believes Bitcoin should be in everyone's portfolio, the best ways to get into crypto, and how Robert looks at the changes happening in the crypto market.",
    youtubeId: "Dannp9g6Fjs",
    channel: "Algo Alpha",
  },
];

// ---------------------------------------------------------------------------
// 7.7 Social Media Links
// ---------------------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/tradewithspot/",
    icon: "Instagram",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/people/Trade-with-Spot/100094648452494/",
    icon: "Facebook",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/trade-with-spot",
    icon: "Linkedin",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@tradewithspotai",
    icon: "Music2", // TikTok not in Lucide, use Music2
  },
];

// ---------------------------------------------------------------------------
// 6.1 Sidebar Navigation (Desktop lg+)
// ---------------------------------------------------------------------------

export const sidebarNavItems: NavItem[] = [
  {
    label: "Home",
    type: "route",
    target: "/",
    icon: "LayoutDashboard",
  },
  {
    label: "About",
    type: "route",
    target: "/about",
    icon: "Users",
  },
  {
    label: "Strategies",
    type: "anchor",
    target: "/#strategies",
    icon: "BarChart3",
  },
  {
    label: "Results",
    type: "anchor",
    target: "/#results",
    icon: "TrendingUp",
  },
  {
    label: "Resources",
    type: "anchor",
    target: "/#resources",
    icon: "Play",
  },
  {
    label: "APPLY NOW",
    type: "external",
    target: "https://lp.algoalpha.co/portfolio-accelerator",
    icon: "", // Button style, not an icon link
  },
  {
    label: "Member Login",
    type: "external",
    target: "https://app.algoalpha.co",
    icon: "LogIn",
  },
];

// ---------------------------------------------------------------------------
// 6.2 Mobile Bottom Tab Bar (below lg)
// ---------------------------------------------------------------------------

export const mobileNavItems: NavItem[] = [
  {
    label: "Home",
    type: "route",
    target: "/",
    icon: "Home",
  },
  {
    label: "About",
    type: "route",
    target: "/about",
    icon: "Users",
  },
  {
    label: "Strategies",
    type: "anchor",
    target: "/#strategies",
    icon: "BarChart3",
  },
  {
    label: "Apply",
    type: "external",
    target: "https://lp.algoalpha.co/portfolio-accelerator",
    icon: "Sparkles", // Highlighted amber
  },
  {
    label: "Login",
    type: "external",
    target: "https://app.algoalpha.co",
    icon: "LogIn",
  },
];

// ---------------------------------------------------------------------------
// 10.4 Footer Links
// ---------------------------------------------------------------------------

export const footerLinks = {
  siteLinks: [
    { label: "About", href: "/about" },
    { label: "Resources", href: "/#resources" },
    { label: "Support", href: "mailto:support@algoalpha.co" },
  ],
  productLinks: [
    {
      label: "Portal",
      href: "https://login.circle.so/sign_in?request_host=community.algoalpha.co#email",
    },
    {
      label: "QuickStart Course",
      href: "https://info.algoalpha.co/qsc-program-1",
    },
    {
      label: "EBook",
      href: "https://info.algoalpha.co/download",
    },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclosures", href: "/disclosures" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;
