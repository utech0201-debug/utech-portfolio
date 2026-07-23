export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
}