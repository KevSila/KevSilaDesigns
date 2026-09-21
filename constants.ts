import { Project, ProjectCategory, Skill } from './types';

export const MAIN_PORTFOLIO_URL = "https://kevsilaportfolio.netlify.app";

export const PERSONAL_INFO = {
  name: "Kevin Yumbya Sila",
  role: "UI/UX Designer & Digital Strategist",
  tagline: "Designing clear digital experiences, visual systems, and content that turn ideas into action.",
  location: "Nairobi, Kenya",
  email: "kevinsila100@gmail.com",
  phone: "+254 717-578394",
  linkedin: "https://linkedin.com/in/kevin-sila-9143b618a",
  about: "I am a Nairobi-based UI/UX designer and digital strategist with a background in Mathematics and Computer Science. I combine visual design, web thinking, content strategy and SEO to create clear, practical digital experiences and communication assets."
};

export const SKILLS: Skill[] = [
  { name: "UI/UX Design (Figma)", level: 90 },
  { name: "Graphic Design (Canva)", level: 95 },
  { name: "Web Design & Development", level: 85 },
  { name: "Editorial & Presentation Design", level: 88 },
  { name: "Digital Strategy & SEO", level: 88 },
  { name: "Content & Project Coordination", level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Firelit Wisdom - Book Cover",
    category: ProjectCategory.PRINT,
    description: "A compelling cover design for a psychology and ancient wisdom book, focusing on ancient anchors for truth. Currently sold on Amazon, Selar, and Nuria Bookstore.",
    link: "https://www.canva.com/d/b2gG37tHGC9mp8y",
    tags: ["Book Cover", "Print Design", "Psychology"]
  },
  {
    id: "p2",
    title: "CLEAR Acceleration - Promotional Poster",
    category: ProjectCategory.BRANDING,
    description: "Strategic promotional material for CLEAR Acceleration Inc., a Canadian digital media consultancy. Designed to align with the client's corporate branding.",
    link: "https://www.canva.com/d/ifSjFrzwE8erHkq",
    tags: ["Marketing", "Poster", "Consulting"]
  },
  {
    id: "p3",
    title: "Website Testimonial Showcase",
    category: ProjectCategory.WEB_ASSETS,
    description: "A visually engaging testimonial layout designed for the CLEAR Acceleration Inc. website to build social proof and credibility.",
    link: "https://www.canva.com/d/1Y3GIiY_Qx2qHna",
    tags: ["Web Design", "Social Proof", "UI Element"]
  },
  {
    id: "p4",
    title: "Journal Prompt Design",
    category: ProjectCategory.PRINT,
    description: "A structured and aesthetic journal prompt page created for CLEAR Acceleration Inc., fostering user engagement through guided writing.",
    link: "https://www.canva.com/d/hl0B75MsHglfcjO",
    tags: ["Printables", "Layout", "Education"]
  },
  {
    id: "p5",
    title: "Lead Sprint Promo Header Design",
    category: ProjectCategory.WEB_ASSETS,
    description: "High-impact web header designed for the LeadSprint promotion campaign for CLEAR Acceleration Inc. Optimized for web responsiveness.",
    link: "https://www.canva.com/d/ESmenTGnDK7X1h1",
    tags: ["Web Header", "Promotion", "Banner"]
  },
  {
    id: "p6",
    title: "Equavo Ltd - Corporate ID Card",
    category: ProjectCategory.BRANDING,
    description: "Professional staff identification card system designed for Equavo Limited, ensuring security and consistent corporate identity for all staff.",
    link: "https://www.canva.com/d/FIBI5sCmXn2yWbM",
    tags: ["Corporate Identity", "ID Card", "Security"]
  },
  {
    id: "p7",
    title: "Supply Chain Delivery Note",
    category: ProjectCategory.PRINT,
    description: "Functional delivery documentation designed for Equavo Limited to track fruit varieties delivered to warehouses by suppliers, improving logistics.",
    link: "https://www.canva.com/d/vrneAwcPED6Xiwp",
    tags: ["Logistics", "Documentation", "Forms"]
  },
  {
    id: "p8",
    title: "Maisha Youth Proposal Presentation",
    category: ProjectCategory.STRATEGY,
    description: "A strategic proposal deck for the Maisha Youth Movement website development. Focuses on clarity, impact, and stakeholder engagement.",
    link: "https://www.canva.com/d/C-NImSKCeaiHZLa",
    tags: ["Presentation", "Strategy", "Proposal"]
  },
  {
    id: "p9",
    title: "Tech Specialist LinkedIn Banner",
    category: ProjectCategory.BRANDING,
    description: "A personal branding asset designed to highlight technical expertise and professional services on LinkedIn.",
    link: "https://www.canva.com/d/7VLRXIHyIhjCLgi",
    tags: ["Social Media", "Personal Branding", "LinkedIn"]
  },
  {
    id: "p10",
    title: "YouTube Channel Logo",
    category: ProjectCategory.BRANDING,
    description: "A clean and memorable logo mark designed for a content creator's YouTube channel.",
    link: "https://www.canva.com/d/k538sOAup7v6mWU",
    tags: ["Logo Design", "Branding", "Vector"]
  },
  {
    id: "p11",
    title: "Fitness Trainer Profile",
    category: ProjectCategory.WEB_ASSETS,
    description: "A detailed professional profile for a fitness trainer, showcasing certifications, work experience, and services.",
    link: "https://www.canva.com/d/qAvUhU5kCi8dEBo",
    tags: ["Portfolio", "Profile", "Fitness"]
  },
  {
    id: "p12",
    title: "Zenfit Ramadan Offer Video",
    category: ProjectCategory.VIDEO,
    description: "A motion graphic promotional video for Zenfit detailing seasonal Ramadan offers.",
    link: "https://www.canva.com/d/-h3Win2syreHoAP",
    tags: ["Video Ad", "Motion Graphics", "Social Media"]
  },
  {
    id: "p13",
    title: "Pinterest SEO Pins - Firelit Mind & Attention by Design",
    category: ProjectCategory.WEB_ASSETS,
    description: "SEO-optimised Pinterest pin designs for my two books, 'Firelit Mind' and 'Attention by Design'. Designed to demonstrate how to build discoverable pins using brand kits, cohesive colors, and a unified design language.",
    link: "https://www.canva.com/d/eHbnZiDuI4gwbvu",
    tags: ["Pinterest Pins", "SEO", "Social Media", "Branding"]
  }
];