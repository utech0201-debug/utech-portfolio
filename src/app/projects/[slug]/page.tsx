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
import { ProjectStructuredData } from "@/components/seo/StructuredData";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const siteUrl = "https://utech-portfolio.vercel.app";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested Utech project could not be found.",
    };
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const imageUrl = `${siteUrl}${project.image}`;

  return {
    title: project.title,

    description: project.description,

    keywords: [
      project.title,
      "Utech",
      "Full-Stack Developer",
      "Software Engineering",
      ...project.technologies,
    ],

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} | Utech`,
      description: project.description,
      url: projectUrl,
      siteName: "Utech Portfolio",
      type: "article",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — Utech`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Utech`,
      description: project.description,
      images: [imageUrl],
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
    <>
      <ProjectStructuredData
        siteUrl={siteUrl}
        title={project.title}
        description={project.description}
        slug={project.slug}
        image={project.image}
        technologies={project.technologies}
        github={project.github}
        demo={project.demo}
      />

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
          <ProjectTimeline
            timeline={project.timeline}
          />
        )}

        <RelatedProjects
          currentSlug={project.slug}
        />
      </main>
    </>
  );
}
