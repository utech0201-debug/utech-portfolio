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

interface Props {
  params: Promise<{
    slug: string;
  }>;
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
    <main className="mx-auto max-w-7xl space-y-20 px-6 py-20">
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
  );
}