export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1–5
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
