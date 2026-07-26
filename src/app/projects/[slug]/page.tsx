import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/projects/details/ProjectHero";
import ProjectGallery from "@/components/projects/details/ProjectGallery";
import ProjectFeatures from "@/components/projects/details/ProjectFeatures";
import ProjectTechStack from "@/components/projects/details/ProjectTechStack";
import ProjectArchitecture from "@/components/projects/details/ProjectArchitecture";
import ProjectChallenges from "@/components/projects/details/ProjectChallenges";
import ProjectLessons from "@/components/projects/details/ProjectLessons";
import ProjectFuture from "@/components/projects/details/ProjectFuture";
import ProjectTimeline from "@/components/projects/timeline/ProjectTimeline";
import RelatedProjects from "@/components/projects/related/RelatedProjects";
import ProjectStats from "@/components/projects/stats/ProjectStats";

const SITE_URL = "https://utech-portfolio.vercel.app";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate static project routes from project data.
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generate SEO metadata dynamically for every project.
 */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Utech",
      description: "The requested project could not be found.",
    };
  }

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: project.title,

    description: project.description,

    keywords: [
      "Utech",
      "Software Developer",
      "Full-Stack Developer",
      "Ghana Developer",
      ...project.technologies,
      ...project.features,
    ],

    authors: [
      {
        name: "Utech",
      },
    ],

    creator: "Utech",

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} | Utech`,

      description: project.description,

      url: projectUrl,

      siteName: "Utech Portfolio",

      type: "website",

      images: [
        {
          url: project.image,
          alt: `${project.title} project preview`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: `${project.title} | Utech`,

      description: project.description,

      images: [project.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen mx-auto max-w-7xl space-y-20 px-6 py-20">
      <ProjectHero project={project} />

      <ProjectGallery project={project} />

      <ProjectStats project={project} />

      <ProjectFeatures project={project} />

      <ProjectTechStack project={project} />

      <ProjectArchitecture project={project} />

      <ProjectChallenges project={project} />

      <ProjectLessons project={project} />

      <ProjectFuture project={project} />

      {project.timeline && (
        <ProjectTimeline timeline={project.timeline} />
      )}

      <RelatedProjects currentSlug={project.slug} />
    </main>
  );
}
