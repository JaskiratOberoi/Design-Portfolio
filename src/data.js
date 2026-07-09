import ink from "./assets/inkDS.png";
import bulk from "./assets/bulk-dpx.png";
import esi from "./assets/esi.png";
import eproc from "./assets/eproc.png";
import dashboard from "./assets/dashboard.png";
import abbpt from "./assets/abbpt.png";

export const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jaskiratoberoi/" },
  { label: "GitHub", url: "https://github.com/JaskiratOberoi" },
  { label: "Behance", url: "https://www.behance.net/JaskiratSOberoi" },
];

export const EMAIL = "me@jaskiratoberoi.com";

export const WORK = [
  {
    index: "01",
    title: "Ink Design System",
    tags: ["Design Systems", "React TS", "WCAG 3"],
    year: "2024",
    image: ink,
    url: "https://drive.google.com/file/d/1ytzMKjT4w0_Uqiu79OPGpap5N10jo5-d/view?usp=drive_link",
    blurb:
      "Accessible component library — tokens, docs and unit-tested components for an internal design system at Amazon.",
  },
  {
    index: "02",
    title: "AB Bulk Picker",
    tags: ["Rapid Prototyping", "Atomic Design"],
    year: "2023",
    image: bulk,
    url: "https://docs.google.com/document/d/1AYS08zdjDPDecQv62guN-QvrUlYbg65BamVg0TbnRrU/edit?usp=sharing",
    blurb:
      "High-fidelity coded prototype that let Amazon Business test a bulk-purchasing flow before a line of production code.",
  },
  {
    index: "03",
    title: "ESI Unified Onboarding",
    tags: ["Product Design", "React"],
    year: "2023",
    image: esi,
    url: "https://drive.google.com/file/d/1AqxD_vZOm3J8hyWE55lQCXObm2Yn21RE/view?usp=sharing",
    blurb:
      "Unified onboarding management prototype — one flow to replace a maze of internal tools.",
  },
  {
    index: "04",
    title: "Business Prime Plans",
    tags: ["Design Systems", "Production UI"],
    year: "2022",
    image: abbpt,
    url: "https://www.amazon.com/businessprime",
    blurb:
      "Plans-comparison table shipped to production on amazon.com/businessprime, built on the AUI design system.",
  },
  {
    index: "05",
    title: "E-Procurement Policies",
    tags: ["UX Testing", "Prototype"],
    year: "2022",
    image: eproc,
    url: "https://protozoa.dev/prototypes/6b09fede-877c-469d-a18e-a0bc92d232bb/",
    blurb:
      "Interactive prototype used in moderated user-testing rounds for procurement policy workflows.",
  },
  {
    index: "06",
    title: "ABUX Dashboard",
    tags: ["Data Viz", "Internal Tools"],
    year: "2021",
    image: dashboard,
    url: "https://staging.dpb3nrjrd9hzb.amplifyapp.com/",
    blurb:
      "Minimal analytics dashboard for the Amazon Business UX team — alpha build, designed and coded solo.",
  },
];

export const SERVICES = [
  {
    index: "01",
    title: "Design Systems",
    description:
      "Tokens, accessible components, Storybook docs and governance. I've built and maintained design systems at Amazon and Boomi — I can audit yours, or build one from zero.",
    deliverables: ["Component libraries", "Token architecture", "A11y audits", "Storybook docs"],
  },
  {
    index: "02",
    title: "Interactive Prototypes",
    description:
      "Coded, high-fidelity prototypes that feel like the real product. Perfect for user testing, stakeholder buy-in, or fundraising demos — in days, not months.",
    deliverables: ["Coded prototypes", "Micro-interactions", "User-testing builds", "Demo sites"],
  },
  {
    index: "03",
    title: "Websites That Convert",
    description:
      "Marketing sites, portfolios and landing pages — designed and developed end-to-end by one person, so nothing is lost in handoff.",
    deliverables: ["Design + build", "Motion & animation", "CMS setup", "Deployment"],
  },
  {
    index: "04",
    title: "Design–Dev Bridge",
    description:
      "Your designers and developers speak different languages. I speak both. I embed with teams to unblock handoffs, translate specs and ship pixel-faithful UI.",
    deliverables: ["Handoff rescue", "Spec translation", "Frontend pairing", "Process design"],
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Now",
    company: "Boomi",
    role: "Senior Design Technologist",
    note: "Designing and building the Magnetosphere & Exosphere design systems.",
  },
  {
    period: "2021 — 2024",
    company: "Amazon Business UX",
    role: "Design Technologist",
    note: "Amazon India's first-ever Design Technologist. Bridged 10+ designers and 20+ engineers.",
  },
  {
    period: "2020 — 2021",
    company: "Amazon Fintech",
    role: "Support Engineer III",
    note: "Data pipelines, automation and BI reporting.",
  },
  {
    period: "2019 — 2020",
    company: "Insight (Hanu)",
    role: "Cloud Engineer",
    note: "Azure data platforms for Fortune-500 clients; designed a chatbot admin portal.",
  },
  {
    period: "2018",
    company: "AT&T",
    role: "Summer Intern",
    note: "Built a Stack Overflow question recommender with Python + NLP.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I always found him to be bright, curious, patient, and self-aware. He learned well from early mistakes, developing the ability to anticipate and solve problems with initiative. If you are seeking a front-end engineer with a high degree of both ability and motivation, consider Jaskirat for your team.",
    name: "Gregory Martin",
    role: "Sr. Design Technologist, Amazon",
  },
  {
    quote:
      "His expertise in creating highly interactive and dynamic prototypes has been invaluable, bridging the gap between design and engineering seamlessly. Jas's deep knowledge of UX, UI, and front-end technologies makes him a key asset to our team.",
    name: "Vijayraj Bhatt",
    role: "Sr. UX Designer, Amazon",
  },
];

export const MARQUEE_ITEMS = [
  "Design Systems",
  "Creative Frontend",
  "Micro-interactions",
  "Accessibility",
  "Rapid Prototyping",
  "React / TypeScript",
  "Motion Design",
  "UX Engineering",
];
