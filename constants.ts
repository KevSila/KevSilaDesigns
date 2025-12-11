import { Project, ProjectCategory, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Kevin Yumbya Sila",
  role: "Developer & Digital Media Strategist",
  tagline: "Bridging Data, Design, and Strategy to drive impactful change.",
  location: "Nairobi, Kenya",
  email: "kevinsila100@gmail.com",
  phone: "+254 717-578394",
  linkedin: "https://linkedin.com/in/kevin-sila-9143b618a",
  about: "I am a data-driven professional with a background in Mathematics and Computer Science. My expertise spans data analysis, digital media strategy, UI/UX design, and operational management. I thrive at the intersection of technology, leadership, and innovation, leveraging tools like Python, SQL, and Figma to create meaningful solutions."
};

export const SKILLS: Skill[] = [
  { name: "UI/UX Design (Figma)", level: 90 },
  { name: "Graphic Design (Canva)", level: 95 },
  { name: "Web Development (React/WP)", level: 85 },
  { name: "Data Analysis (SQL/Python)", level: 80 },
  { name: "Digital Strategy & SEO", level: 88 },
  { name: "Project Management", level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Firelit Wisdom - Book Cover",
    category: ProjectCategory.PRINT,
    description: "A compelling cover design for a psychology and ancient wisdom book. Created to resonate with readers seeking truth, currently sold on Amazon and Nuria Bookstore.",
    link: "https://www.canva.com/design/DAG5_b2x7iM/BxQEbTISMb6brg-vdnA9-A/edit?utm_content=DAG5_b2x7iM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Book Cover", "Print Design", "Psychology"]
  },
  {
    id: "p2",
    title: "CLEAR Acceleration - Promotional Poster",
    category: ProjectCategory.BRANDING,
    description: "Strategic promotional material for a Canadian digital media consultancy. Designed to align with the client's corporate branding and digital presence.",
    link: "https://www.canva.com/design/DAGsrDjdwME/yVdJgN7UJUbfWxS9kZOo_g/edit?utm_content=DAGsrDjdwME&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Marketing", "Poster", "Consulting"]
  },
  {
    id: "p3",
    title: "Website Testimonial Showcase",
    category: ProjectCategory.WEB_ASSETS,
    description: "A visually engaging testimonial layout designed for the CLEAR Acceleration Inc. website to build social proof and credibility.",
    link: "https://www.canva.com/design/DAGsrDjdwME/yVdJgN7UJUbfWxS9kZOo_g/edit?utm_content=DAGsrDjdwME&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Web Design", "Social Proof", "UI Element"]
  },
  {
    id: "p4",
    title: "Journal Prompt Design",
    category: ProjectCategory.PRINT,
    description: "A structured and aesthetic journal prompt page created for CLEAR Acceleration Inc., fostering user engagement through guided writing.",
    link: "https://www.canva.com/design/DAGsSrfD_kY/L8qUiJVA4NY_MWGdsiOxbw/edit?utm_content=DAGsSrfD_kY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Printables", "Layout", "Education"]
  },
  {
    id: "p5",
    title: "LadSprint Promo Header",
    category: ProjectCategory.WEB_ASSETS,
    description: "High-impact web header designed for the LadSprint promotion campaign. Optimized for web responsiveness and brand consistency.",
    link: "https://www.canva.com/design/DAGsgq-Zv4I/ksYJxjJhSd1v4eITq0McNg/edit?utm_content=DAGsgq-Zv4I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Web Header", "Promotion", "Banner"]
  },
  {
    id: "p6",
    title: "Equavo Ltd - Corporate ID Card",
    category: ProjectCategory.BRANDING,
    description: "Professional staff identification card system designed for Equavo Limited, ensuring security and consistent corporate identity.",
    link: "https://www.canva.com/design/DAGc04vgt9I/V-cPk-bOIMhjg9K3fnYrBA/edit?utm_content=DAGc04vgt9I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Corporate Identity", "ID Card", "Security"]
  },
  {
    id: "p7",
    title: "Supply Chain Delivery Note",
    category: ProjectCategory.PRINT,
    description: "Functional delivery documentation designed for Equavo Limited to track fruit varieties delivered to warehouses, improving operational logistics.",
    link: "https://www.canva.com/design/DAGNosZxg00/YLzfUQajk230BGnoQV6kOw/edit?utm_content=DAGNosZxg00&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Logistics", "Documentation", "Forms"]
  },
  {
    id: "p8",
    title: "Maisha Youth Proposal Presentation",
    category: ProjectCategory.STRATEGY,
    description: "A strategic proposal deck for the Maisha Youth Movement website development. Focuses on clarity, impact, and stakeholder engagement.",
    link: "https://www.canva.com/design/DAFI6fpvYGI/86HSo2h806XUPgrCh6Zzdw/edit?utm_content=DAFI6fpvYGI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Presentation", "Strategy", "Proposal"]
  },
  {
    id: "p9",
    title: "Tech Specialist LinkedIn Banner",
    category: ProjectCategory.BRANDING,
    description: "A personal branding asset designed to highlight technical expertise and professional services on LinkedIn.",
    link: "https://www.canva.com/design/DAFHmtXmzBQ/srr-i9CFBxX1pgZ4DxFXEA/edit?utm_content=DAFHmtXmzBQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Social Media", "Personal Branding", "LinkedIn"]
  },
  {
    id: "p10",
    title: "YouTube Channel Logo",
    category: ProjectCategory.BRANDING,
    description: "A clean and memorable logo mark designed for a content creator's YouTube channel.",
    link: "https://www.canva.com/design/DAFjXGefX9M/f7Z79Jnn611M4NqXxPJ7Uw/edit?utm_content=DAFjXGefX9M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Logo Design", "Branding", "Vector"]
  },
  {
    id: "p11",
    title: "Fitness Trainer Profile",
    category: ProjectCategory.WEB_ASSETS,
    description: "A detailed professional profile for a fitness trainer, showcasing certifications, work experience, and services.",
    link: "https://www.canva.com/design/DAGPCTNwuwI/bCZZPyVSkqIwSa6Pb5U9ow/edit?utm_content=DAGPCTNwuwI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Portfolio", "Profile", "Fitness"]
  },
  {
    id: "p12",
    title: "Zenfit Ramadan Offer Video",
    category: ProjectCategory.VIDEO,
    description: "A motion graphic promotional video for Zenfit detailing seasonal Ramadan offers.",
    link: "https://www.canva.com/design/DAGgehqWJwI/xJWjACyzKRub97zulhEbPA/edit?utm_content=DAGgehqWJwI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    tags: ["Video Ad", "Motion Graphics", "Social Media"]
  }
];