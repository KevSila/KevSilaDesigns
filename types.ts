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
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}