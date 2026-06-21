import type { Project, Skill, Experience } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description:
      "A brief description of what this project does and the problems it solves.",
    tags: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Another great project showcasing your fullstack engineering skills.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A CLI tool or open-source contribution that demonstrates depth.",
    tags: ["Go", "Docker", "CI/CD"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Python", level: 4, category: "backend" },
  { name: "PostgreSQL", level: 3, category: "backend" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "Git", level: 5, category: "tools" },
  { name: "AWS", level: 3, category: "tools" },
];

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    description: [
      "Built scalable REST APIs serving 100k+ daily active users.",
      "Led migration from monolith to microservices architecture.",
      "Mentored 2 junior engineers and conducted code reviews.",
    ],
  },
  {
    company: "Previous Company",
    role: "Junior Software Engineer",
    period: "Jun 2022 – Dec 2023",
    description: [
      "Developed responsive frontend features using React and TypeScript.",
      "Improved test coverage from 40% to 85% with Jest and Cypress.",
    ],
  },
];
