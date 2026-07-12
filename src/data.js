import ink from "./assets/inkDS.png";
import bulk from "./assets/bulk-dpx.png";
import esi from "./assets/esi.png";
import eproc from "./assets/eproc.png";
import dashboard from "./assets/dashboard.png";
import abbpt from "./assets/abbpt.png";
import coveandlane from "./assets/coveandlane.png";
import noukaitokyo from "./assets/noukaitokyo.svg";
import pragyavijh from "./assets/pragyavijh.png";

export const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jaskiratoberoi/" },
  { label: "GitHub", url: "https://github.com/JaskiratOberoi" },
  { label: "Behance", url: "https://www.behance.net/JaskiratSOberoi" },
];

export const EMAIL = "me@jaskiratoberoi.com";

export const CLIENTS = [
  "Amazon",
  "Amazon Business",
  "Boomi",
  "Ares Labs",
  "OpenRipples",
  "Cove & Lane",
  "Noukai Tokyo",
  "Pragya Vijh",
  "AT&T",
  "Hanu Software",
];

export const WORK = [
  {
    index: "01",
    title: "Cove & Lane",
    tags: ["Freelance", "Conversion Design", "Performance"],
    year: "Live",
    image: coveandlane,
    url: "https://coveandlane.in/",
    blurb:
      "Design refresh and performance overhaul for a fashion e-commerce brand — conversion-focused changes and a 40% lift in performance metrics.",
  },
  {
    index: "02",
    title: "Noukai Tokyo",
    tags: ["Freelance", "E-commerce", "Shopify"],
    year: "WIP",
    image: noukaitokyo,
    url: "https://noukaitokyo.com",
    blurb:
      "Product store built from scratch for a Tokyo-based client — Phase I shipped, Phase II in the works.",
  },
  {
    index: "03",
    title: "Pragya Vijh",
    tags: ["Freelance", "E-commerce", "Design + Build"],
    year: "Live",
    image: pragyavijh,
    url: "https://pragyavijh.com/in",
    blurb:
      "Designed and developed end-to-end — an e-commerce store selling products and services for a celebrity tarot reader and astrologer.",
  },
  {
    index: "04",
    title: "Ink Design System",
    tags: ["Design Systems", "React TS", "WCAG 3"],
    year: "2024",
    image: ink,
    url: "https://drive.google.com/file/d/1ytzMKjT4w0_Uqiu79OPGpap5N10jo5-d/view?usp=drive_link",
    blurb:
      "Accessible component library — tokens, docs and unit-tested components for an internal design system at Amazon.",
  },
  {
    index: "05",
    title: "AB Bulk Picker",
    tags: ["Rapid Prototyping", "Atomic Design"],
    year: "2023",
    image: bulk,
    url: "https://docs.google.com/document/d/1AYS08zdjDPDecQv62guN-QvrUlYbg65BamVg0TbnRrU/edit?usp=sharing",
    blurb:
      "High-fidelity coded prototype that let Amazon Business test a bulk-purchasing flow before a line of production code.",
  },
  {
    index: "06",
    title: "ESI Unified Onboarding",
    tags: ["Product Design", "React"],
    year: "2023",
    image: esi,
    url: "https://drive.google.com/file/d/1AqxD_vZOm3J8hyWE55lQCXObm2Yn21RE/view?usp=sharing",
    blurb:
      "Unified onboarding management prototype — one flow to replace a maze of internal tools.",
  },
  {
    index: "07",
    title: "Business Prime Plans",
    tags: ["Design Systems", "Production UI"],
    year: "2022",
    image: abbpt,
    url: "https://www.amazon.com/businessprime",
    blurb:
      "Plans-comparison table shipped to production on amazon.com/businessprime, built on the AUI design system.",
  },
  {
    index: "08",
    title: "E-Procurement Policies",
    tags: ["UX Testing", "Prototype"],
    year: "2022",
    image: eproc,
    url: "https://protozoa.dev/prototypes/6b09fede-877c-469d-a18e-a0bc92d232bb/",
    blurb:
      "Interactive prototype used in moderated user-testing rounds for procurement policy workflows.",
  },
  {
    index: "09",
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
    period: "2025 — Now",
    company: "Ares Labs",
    role: "Director, UX Design & Software Engineering",
    note: "Leading a team of 10 designers and developers. Architected the internal design system, cut SDLC iteration cycles by 70% with AI-powered tooling, and shipped a CRM that lifted net earnings 10%.",
  },
  {
    period: "2024 — Now",
    company: "OpenRipples",
    role: "Senior Frontend & Design Engineer",
    note: "Freelance services firm (openripples.com) — I bring frontend and design engineering expertise to client projects and services.",
  },
  {
    period: "2024 — 2025",
    company: "Boomi",
    role: "Senior Design Technologist",
    note: "Designed and built the Magnetosphere (internal) & Exosphere (public) design systems; mentored interns, designers and developers.",
  },
  {
    period: "2021 — 2025",
    company: "Amazon (Amazon Business)",
    role: "Design Technologist",
    note: "Amazon India's first-ever Design Technologist. Bridged 10+ designers and 20+ engineers across Hyderabad, Madrid, Austin and Seattle.",
  },
  {
    period: "2020 — 2021",
    company: "Amazon Fintech",
    role: "Support Engineer III",
    note: "Data pipelines, automation and BI reporting.",
  },
  {
    period: "2019 — 2020",
    company: "Hanu Software",
    role: "Cloud Engineer",
    note: "Azure data platforms for Fortune-500 clients; designed a chatbot admin portal.",
  },
  {
    period: "2017 — 2020",
    company: "Hansei By Design",
    role: "Freelance Designer & Developer",
    note: "Where it started — UI/UX, web design, frontend builds and content for freelance clients.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "He brought that rare intersection of design and engineering to discussions, and it showed. His perspective consistently helped our design team make stronger, more grounded decisions by understanding the technical implications behind the work. Any team would be lucky to have him — I certainly felt lucky to have him as a partner in the craft.",
    name: "Frank Wang",
    role: "Design Leader, Enterprise SaaS",
  },
  {
    quote:
      "He proved himself to be a very capable and collaborative team member, especially when deadlines were tight and the problem space ambiguous. We could trust him to roll up his sleeves and get the job done right, no matter what obstacles arose — all while being a super fun colleague to work with.",
    name: "Sashank Macharla",
    role: "Design @ Meta, ex-Amazon",
  },
  {
    quote:
      "Jas is a highly skilled design technologist with a deep understanding of the latest technologies and tools. His ability to seamlessly integrate design principles with cutting-edge technology results in highly effective solutions that meet modern standards.",
    name: "Chandra Sekhar K",
    role: "Head of UX Design, Ikonz Studios — managed Jas at Amazon",
  },
  {
    quote:
      "I always found him to be bright, curious, patient, and self-aware. He learned well from early mistakes, developing the ability to anticipate and solve problems with initiative. If you are seeking a front-end engineer with a high degree of both ability and motivation, consider Jaskirat for your team.",
    name: "Gregory Martin",
    role: "Sr. Design Technologist, Amazon",
  },
  {
    quote:
      "As a Senior Design Technologist, he's helped me see how design and development can (and should) go hand in hand. I've learned a lot from him — not just about design systems, but about how to think more holistically as a frontend developer. He's approachable, supportive, and someone you can always count on for thoughtful insights.",
    name: "Aman Rai",
    role: "Frontend Developer, Boomi",
  },
  {
    quote:
      "His expertise in creating highly interactive and dynamic prototypes has been invaluable, bridging the gap between design and engineering seamlessly. Jas's deep knowledge of UX, UI, and front-end technologies makes him a key asset to our team.",
    name: "Vijayraj Bhatt",
    role: "Sr. UX Designer, Amazon",
  },
  {
    quote:
      "Jaskirat has consistently demonstrated a strong work ethic and a collaborative spirit. He is always willing to help, brings great ideas to the table, and contributes actively to problem-solving. His positive attitude and reliability make him a valuable team member, and I highly recommend him for any future projects or roles.",
    name: "Rakesh Patil",
    role: "Test Engineer, GlobalLogic",
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
