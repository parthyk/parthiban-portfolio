export const profile = {
  name: "Parthiban K",
  role: "Creative Head",
  company: "OneDot Media",
  email: "parthybank@gmail.com",
  phone: "+91 9789071079",
  linkedin: "https://www.linkedin.com/in/parthyk",
  instagram: "https://www.instagram.com/parthibank",
  instagramHandle: "@parthibank",
  behance: "https://www.behance.net/parthyk",
};

export const chapters = [
  { id: "00", label: "Prologue", accent: "stone" },
  { id: "01", label: "The Designer", accent: "blue" },
  { id: "02", label: "Learning", accent: "teal" },
  { id: "03", label: "The Turning Point", accent: "violet" },
  { id: "04", label: "The Team Lead", accent: "violet" },
  { id: "05", label: "The Creative Head", accent: "red" },
  { id: "06", label: "Dashboard", accent: "red" },
  { id: "07", label: "Projects", accent: "red" },
  { id: "08", label: "Philosophy", accent: "violet" },
  { id: "09", label: "The Future", accent: "gold" },
  { id: "10", label: "Contact", accent: "gold" },
];

export const designerTimeline = [
  {
    period: "2015 — 2016",
    company: "TryAround",
    role: "Creative Designer",
    note: "Freelance — first pixels",
  },
  {
    period: "2016 — 2019",
    company: "OneDot Media",
    role: "Creative Designer",
    note: "UI · Brand · Social",
  },
];

export const skillGroups = [
  {
    title: "Design Tools",
    icon: "tools",
    skills: [
      { name: "Photoshop", level: 95 },
      { name: "Illustrator", level: 92 },
      { name: "Premiere Pro", level: 85 },
      { name: "After Effects", level: 80 },
      { name: "Photography", level: 82 },
    ],
  },
  {
    title: "Craft & Brand",
    icon: "craft",
    skills: [
      { name: "Branding", level: 94 },
      { name: "Typography", level: 90 },
      { name: "Product Design", level: 86 },
      { name: "UI Design", level: 92 },
    ],
  },
  {
    title: "Future-Proof",
    icon: "future",
    skills: [
      { name: "Prototyping", level: 88 },
      { name: "Prompting", level: 84 },
    ],
  },
];

export const leadCards = [
  {
    title: "Leading Designers",
    tag: "People",
    desc: "Guiding a team of designers — hiring, coaching, and protecting the craft.",
    image: "/images/Leading Designer.png",
  },
  {
    title: "Managing Deadlines",
    tag: "Process",
    desc: "Turning chaos into calendars without ever letting quality slip.",
    image: "/images/managing deadlines.png",
  },
  {
    title: "Campaign Planning",
    tag: "Strategy",
    desc: "From first concept to final delivery across print, digital and social.",
    image: "/images/Campaign Planning.png",
  },
  {
    title: "Client Meetings",
    tag: "Trust",
    desc: "Translating business goals into confident creative decisions.",
    image: "/images/Client Meeting.png",
  },
  {
    title: "Mentoring Teams",
    tag: "Growth",
    desc: "Helping juniors become designers, and designers become leaders.",
    image: "/images/Growth.png",
  },
];

export const careerTimeline = [
  {
    year: "2016",
    title: "Creative Designer",
    period: "2016 — 2019",
    achievements: [
      "Owned visual identity work for 40+ brands",
      "Built the studio's design system",
      "Turned simple briefs into full brand stories",
      "Championed storytelling inside the team",
    ],
  },
  {
    year: "2019",
    title: "Team Lead",
    period: "2019 — 2023",
    achievements: [
      "Built and led a 9-person creative team",
      "Led 120+ campaigns from idea to delivery",
      "Mentored designers into confident leads",
      "Introduced structured creative reviews",
    ],
  },
  {
    year: "2023",
    title: "Creative Head",
    period: "2023 — Now",
    achievements: [
      "Direct brand strategy across 6 industries",
      "Scale creative operations for 40+ people",
      "Pioneered AI workflows across the studio",
      "Drive growth with data-backed creativity",
    ],
  },
];

export const metrics = [
  { value: 250, suffix: "+", label: "Projects Delivered", hint: "Across every discipline" },
  { value: 25, suffix: "+", label: "Brands Built", hint: "From identity to voice" },
  { value: 10, suffix: "+", label: "Industries", hint: "Engineering to retail" },
  { value: 10, suffix: "+", label: "Years of Craft", hint: "Since 2015" },
  { value: 40, suffix: "+", label: "Team Members", hint: "Led and mentored" },
];

export const industries = [
  {
    name: "Engineering",
    tag: "Industrial",
    blurb: "Precision brands for companies that build the world around us.",
    clients: ["Nordex India", "IGP Engineers", "El-Tech", "Servo Hydraulics"],
  },
  {
    name: "Manufacturing",
    tag: "Industrial",
    blurb: "Heavy-duty identity work for makers, fabricators and suppliers.",
    clients: ["Corroshield", "TriElectric", "Victory Sweepers", "Quenker Matches"],
  },
  {
    name: "Technology",
    tag: "Digital",
    blurb: "Clean, confident brands for the energy and tech of tomorrow.",
    clients: ["Shizen Energy", "Hachidori", "Testleaf", "K7 Anti Virus"],
  },
  {
    name: "Retailers",
    tag: "Consumer",
    blurb: "Shelf-stopping stories for brands people see every day.",
    clients: ["June Flowers", "Nature Mills", "Freshmeltz", "Glow by NJK"],
  },
  {
    name: "Exporters",
    tag: "Global",
    blurb: "Trust-building branding for businesses trading across borders.",
    clients: ["Geewin Exim", "Pioneer Asia Group", "Coir Genie"],
  },
  {
    name: "Real Estate",
    tag: "Property",
    blurb: "Landmark identities for spaces people call home.",
    clients: ["Casagrand", "TVS Emerald", "G-Square", "JLL", "Bluemoon"],
  },
];

export type PortfolioCategory = "UI Design" | "Brand Design" | "Social Media";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  order: number;
  image: string;
  tag: string;
  desc: string;
  from: string;
  to: string;
};

const CATEGORY_KEY: Record<string, PortfolioCategory> = {
  UI: "UI Design",
  BRAND: "Brand Design",
  SOCIAL: "Social Media",
};

const CATEGORY_GRADIENT: Record<PortfolioCategory, [string, string]> = {
  "UI Design": ["#4f6ef7", "#8b5cf6"],
  "Brand Design": ["#e5484d", "#f26d71"],
  "Social Media": ["#0e9f9e", "#4fd1c5"],
};

const CATEGORY_DESC: Record<PortfolioCategory, string> = {
  "UI Design": "Interface and product design, crafted for a clearer experience.",
  "Brand Design": "Brand identity and a visual system built to be remembered.",
  "Social Media": "Social content and campaigns designed to stop the scroll.",
};

export const portfolioImages = [
  "Blendz-UI-1.webp",
  "ESSA-UI-2.webp",
  "Bicycle-Ui-3.webp",
  "Line-Brand-1.jpg",
  "Shoreline-Brand-2.webp",
  "Kids Wear-Brand-3.webp",
  "Ojas Yoga-Social-1.webp",
  "Sayar Jewellery-Social-2.webp",
  "NatureMills-Social-3.webp",
];

function buildItem(fileName: string): PortfolioItem {
  const base = fileName.replace(/\.[^.]+$/, "");
  const parts = base.split("-");
  const order = parseInt(parts[parts.length - 1] ?? "1", 10) || 1;
  const categoryKey = (parts[parts.length - 2] ?? "").toUpperCase();
  const category = CATEGORY_KEY[categoryKey] ?? "UI Design";
  const title = parts.slice(0, -2).join(" ");
  const [from, to] = CATEGORY_GRADIENT[category];
  return {
    title,
    category,
    order,
    image: `/images/${fileName}`,
    tag: category,
    desc: CATEGORY_DESC[category],
    from,
    to,
  };
}

export const portfolioItems: PortfolioItem[] = portfolioImages
  .map(buildItem)
  .sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.order - b.order;
  });

export const philosophyPrinciples = [
  {
    n: "01",
    title: "Craft First",
    desc: "A pixel is a promise. The details are the brand.",
  },
  {
    n: "02",
    title: "People Over Pixels",
    desc: "Design teams grow brands faster than software ever can.",
  },
  {
    n: "03",
    title: "Business Is The Canvas",
    desc: "Creativity earns a seat at the table when it moves numbers.",
  },
];

export const futureVisions = [
  {
    icon: "ai",
    tag: "AI",
    title: "AI-Powered Creativity",
    desc: "Blending human taste with machine speed to make more, better, faster.",
  },
  {
    icon: "globe",
    tag: "Global",
    title: "Building Global Brands",
    desc: "Taking strong regional brands to markets far beyond their borders.",
  },
  {
    icon: "users",
    tag: "People",
    title: "High-Performance Teams",
    desc: "Leading creative teams that ship with speed and soul.",
  },
  {
    icon: "spark",
    tag: "Growth",
    title: "Continuous Learning",
    desc: "The studio as a school — every project makes us sharper.",
  },
];
