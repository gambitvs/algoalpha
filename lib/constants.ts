// lib/constants.ts — Algo Alpha data constants

import type {
  Strategy,
  StrategyData,
  Testimonial,
  TeamMember,
  ClientResult,
  VideoResource,
  SocialLink,
  NavItem,
} from "./types";

// ---------------------------------------------------------------------------
// 7.2 Strategy Data (new flat model — ordered highest risk to lowest)
// ---------------------------------------------------------------------------

export const strategyCards: StrategyData[] = [
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    myfxbookId: "11972920",
    market: "Forex",
    strategy: "Long HFT",
    totalReturnLabel: "1306%*",
    totalReturnFromApi: false,
    return2025Label: "1306%*",
    returnYTDFromApi: false,
    maxDrawdownLabel: "10.8% / 41%",
    maxDrawdownFromApi: false,
    historicalDrawdown: "10.8%",
    historicalDrawdown2: "41%",
    minimum: "$5,000",
    tradingActivity: "4-50 trades per day",
    assetClass: "Gold",
    sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11972920",
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    myfxbookId: "11758739",
    market: "Forex",
    strategy: "Dual Asset Long & Short",
    totalReturnLabel: "710.53%",
    totalReturnFromApi: true,
    returnYTDFromApi: true,
    maxDrawdownLabel: "19.03%",
    maxDrawdownFromApi: false,
    historicalDrawdown: "19.03%",
    minimum: "$20,000",
    tradingActivity: "6-25 trades per day",
    tradeTypes: "Day Trades, Scalping, Swing",
    assetClass: "BTC/USD, ETH/USD",
    sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11758739",
  },
  {
    name: "Alpha Core",
    slug: "alpha-core",
    myfxbookId: "11980516",
    market: "Forex",
    strategy: "Portfolio; 14 pairs",
    totalReturnLabel: "48.19%",
    totalReturnFromApi: true,
    returnYTDFromApi: true,
    maxDrawdownFromApi: false,
    historicalDrawdown: "6.43%",
    minimum: "$30,000",
    tradingActivity: "10-15 trades per day",
    tradeTypes: "Day Trades, Swing trades",
    assetClass: "Forex",
    sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11980516",
  },
  {
    name: "Alpha X",
    slug: "alpha-x",
    myfxbookId: "11758658",
    market: "Forex",
    strategy: "Portfolio; 21 pairs",
    totalReturnLabel: "88.09%",
    totalReturnFromApi: true,
    returnYTDFromApi: true,
    maxDrawdownFromApi: true,
    historicalDrawdown: "6.43%",
    minimum: "$50,000",
    tradingActivity: "20-80 trades per day",
    tradeTypes: "Day Trades, Swing trades",
    assetClass: "Forex",
    sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11758658",
  },
];

// Legacy strategies array kept for any other pages that still reference it
export const strategies: Strategy[] = [];

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
    imagePath: "/images/robert-miller-profile.png",
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
    { label: "Showcase", href: "/showcase" },
    { label: "Program Overview", href: "/program-overview" },
    { label: "Reviews", href: "/reviews" },
    { label: "CPA Certifications", href: "/cpa-certifications" },
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
      href: "https://lp.algoalpha.co/investors-guide",
    },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclosures", href: "/disclosures" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;
