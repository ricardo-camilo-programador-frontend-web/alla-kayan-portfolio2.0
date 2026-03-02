export interface Experience {
  company: string;
  role?: string;
  type?: string;
  period?: string;
  duration?: string;
  skills?: string;
  roles?: ExperienceRole[];
}

export interface ExperienceRole {
  title: string;
  type: string;
  period: string;
  duration: string;
  skills: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  skills: string;
}

export interface Skill {
  name: string;
  details: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export interface AdSenseConfig {
  clientId: string;
  format?: string;
  width?: string;
  height?: string;
  responsive?: boolean;
}
