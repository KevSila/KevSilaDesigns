export enum ProjectCategory {
  ALL = 'All',
  BRANDING = 'Branding',
  WEB_ASSETS = 'Web & Digital',
  PRINT = 'Print & Docs',
  VIDEO = 'Video',
  STRATEGY = 'Strategy'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  link: string;
  imagePlaceholder: string; // URL for a placeholder since we don't have direct image files
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}