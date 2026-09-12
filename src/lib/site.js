export const SITE = {
  name: "SFGWeb",
  brand: "SFGWEB",
  url: "https://sfgweb.co.za",
  email: "stefan@sfgweb.co.za",
  phoneDisplay: "+27 76 874 0744",
  phoneTel: "+27768740744",
  whatsapp: "https://wa.me/27768740744",
  location: "Free State, South Africa",
  cta: "Get a quote",
  promise: "Modern websites for small businesses",
  tagline:
    "Professionally built, mobile-friendly sites tailored to your business — with clear packages and a simple process from first chat to launch.",
};

export const NAV_ITEMS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Packages", href: "#packages", id: "packages" },
  { name: "Process", href: "#process", id: "process" },
  { name: "Work", href: "#recent-work", id: "recent-work" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const PACKAGES = [
  {
    icon: "rocket",
    title: "Single Page",
    price: "R7,500",
    period: "Once-off",
    description:
      "For local businesses, trades, consultants, freelancers, and startups that need a strong one-page presence.",
    features: [
      "One responsive scrolling website",
      "Up to about 8 content sections, chosen for your business",
      "Customised layout from your brand",
      "Contact form, click-to-call, and WhatsApp",
      "Social links, maps, and hours where relevant",
      "Basic SEO setup (titles, meta, headings, sitemap)",
      "SSL, testing, deployment, and domain connection help",
      "One consolidated feedback round",
    ],
    accent: "from-blue-500 to-cyan-500",
    popular: false,
    buttonText: "Get a quote",
    enquiryValue: "Single Page",
  },
  {
    icon: "building",
    title: "Business Website",
    price: "R11,000",
    period: "Once-off",
    description:
      "For businesses that need more than a single page — typically Home, About, Services, Work, and Contact.",
    features: [
      "Everything in Single Page",
      "About 3–5 pages",
      "Clearer information architecture and navigation",
      "Page-specific layouts and SEO metadata",
      "Room for fuller service and company content",
      "One consolidated feedback round",
    ],
    accent: "from-purple-500 to-pink-500",
    popular: true,
    buttonText: "Get a quote",
    enquiryValue: "Business Website",
  },
  {
    icon: "briefcase",
    title: "Professional Website",
    price: "R16,500",
    period: "Once-off",
    description:
      "For established or information-heavy businesses: multiple services, larger portfolios, stronger structure.",
    features: [
      "Everything in Business Website",
      "About 6–10 pages",
      "Service or detail pages where needed",
      "Portfolio or case-style sections",
      "Stronger conversion-focused structure",
      "More extensive SEO setup",
      "One consolidated feedback round",
    ],
    accent: "from-amber-500 to-orange-500",
    popular: false,
    buttonText: "Get a quote",
    enquiryValue: "Professional Website",
  },
];

export const SERVICES = [
  {
    icon: "code",
    title: "Business websites",
    description: "Professional sites with a clear structure and a strong first impression.",
    features: [
      "Responsive on desktop, tablet, and mobile",
      "Layout tailored to your business",
      "Contact form and WhatsApp",
      "Solid technical foundations",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: "list",
    title: "Clear packages",
    description: "Choose a defined scope so you know what you’re getting before work starts.",
    features: [
      "Single Page, Business, or Professional",
      "No vague “we’ll see” pricing for standard work",
      "One organised feedback round",
      "Domain and hosting stay in your name",
    ],
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: "cogs",
    title: "Custom projects",
    description: "When you need more than a standard business website.",
    features: [
      "Ecommerce and headless WooCommerce",
      "Booking systems and integrations",
      "Dashboards and client portals",
      "Quoted on your actual requirements",
    ],
    accent: "from-amber-500 to-orange-500",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    icon: "comments",
    title: "Discovery",
    description:
      "You share goals, audience, and any existing brand or site. We confirm the right package — or a custom quote.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: "file",
    title: "Content & setup",
    description:
      "You provide text, images, logo, and key details. You arrange the domain (we guide you). We don’t start the build clock on missing content.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    icon: "pencil",
    title: "Design & build",
    description:
      "We structure, design, and develop the site. You review one complete version and send one consolidated list of changes within scope.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    step: "04",
    icon: "rocket",
    title: "Launch & handover",
    description:
      "We deploy, connect the domain, check the essentials, and hand over what you need to use the site.",
    accent: "from-emerald-500 to-teal-500",
  },
];

export const REASONS = [
  {
    icon: "check",
    title: "Built for your business",
    description: "Layout and structure tailored to what you offer — not a generic template look.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: "clock",
    title: "Clear scope and pricing",
    description: "You know what the package includes before work starts.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: "trophy",
    title: "Modern and maintainable",
    description: "Responsive, fast enough for real users, with the technical basics done properly.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: "handshake",
    title: "Straightforward process",
    description: "You supply the essentials; we design, build, and launch.",
    accent: "from-emerald-500 to-teal-500",
  },
];

export const PROJECTS = [
  {
    title: "Lezylrie French Bulldogs",
    category: "Local Business",
    image: "/lfbd.webp",
    url: "https://lezylriefrenchbulldogs.co.za/",
    description:
      "A clean, modern site for a local breeder — gallery, availability, FAQs, and an easy way to get in touch.",
  },
  {
    title: "Lezylrie French Bulldogs",
    category: "Website Redesign",
    image: "/lfb_redesign.webp",
    url: "https://stefangrobler155-lezylrie-french-bu.vercel.app/",
    description:
      "A warmer, more premium rebuild with clearer structure, stronger storytelling, and a layout built to convert.",
  },
  {
    title: "Annie's Irises",
    category: "Ecommerce",
    image: "/annie.webp",
    url: "https://anniesirises.com.au/",
    description:
      "An online store for a specialist nursery — catalogue, seasonal sales, and a plant-focused design. Custom work, quoted separately.",
  },
  {
    title: "Lumina Lens Studio",
    category: "Business Website",
    image: "/project1.webp",
    url: "https://lls-two.vercel.app/",
    description:
      "A visually rich photography site with clear services and a simple enquiry path.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Lelanie van Zyl",
    role: "Owner, Lezylrie French Bulldogs",
    quote:
      "Stefan took the time to understand my business and created a beautiful website that reflects my brand. He is always willing to make adjustments when needed. I recommend him to anyone looking for a website",
  },
  {
    name: "Anna Erasmus",
    role: "Owner, Annie's Irises",
    quote:
      "The designer has created a website that effectively captures the charm and personality of Annie's Irises. The visual presentation aligns well with the gardening and horticulture market...",
  },
];

export const ENQUIRY_FEATURES = [
  "Contact Form",
  "WhatsApp CTA",
  "Gallery / Portfolio",
  "Online Payments",
  "Booking System",
  "Basic SEO Setup",
  "CMS (Self Editable)",
  "Animations",
  "Newsletter Signup",
];

export const WEBSITE_TYPES = [
  { value: "Single Page", label: "Single Page" },
  { value: "Business Website", label: "Business Website" },
  { value: "Professional Website", label: "Professional Website" },
  { value: "Custom", label: "Custom (ecommerce, booking, other)" },
  { value: "Redesign", label: "Website Redesign" },
  { value: "Not sure", label: "Not sure yet" },
];

export const CONTACT_WEBSITE_TYPES = WEBSITE_TYPES;

export const TIMELINES = [
  { value: "ASAP", label: "As soon as content is ready" },
  { value: "1month", label: "Within 1 month" },
  { value: "2months", label: "1–2 months" },
  { value: "Later", label: "Flexible" },
];

export const BUDGETS = [
  { value: "7-11k", label: "R7,500 – R11,000" },
  { value: "11-16k", label: "R11,000 – R16,500" },
  { value: "16-30k", label: "R16,500 – R30,000" },
  { value: "30k+", label: "R30,000+" },
  { value: "unsure", label: "Not sure yet" },
];
