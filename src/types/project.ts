export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  gallery: string[];
  github?: string;
  demo?: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  challenges: string[];
  lessons: string[];
  futurePlans: string[];
  timeline: string[];

  stats: {
    linesOfCode: string;
    components: number;
    files: number;
    duration: string;
    performance: number;
    version: string;
  };
}
