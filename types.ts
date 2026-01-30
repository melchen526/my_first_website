export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  duration?: string;
  description?: string;
  details?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  location: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  contact: Contact;
  summary: {
    en: string;
    cn: string;
  };
  skills: string[];
  languages: string[];
  experience: Experience[];
  education: Education[];
}

export interface ThemeClasses {
  appBg: string;
  sidebarBg: string;
  sidebarText: string;
  sidebarMuted: string;
  sidebarBorder: string;
  mainText: string;
  mainMuted: string;
  mainBorder: string;
  accent: string;
}