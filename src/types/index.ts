export interface Experience {
  company: string;
  role?: string;
  roles?: Role[];
  type?: string;
  period?: string;
  duration?: string;
  skills?: string;
}

export interface Role {
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
