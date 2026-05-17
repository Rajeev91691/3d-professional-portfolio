export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: "AI/ML" | "Web" | "Full Stack" | "Security";
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}