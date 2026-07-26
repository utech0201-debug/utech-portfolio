import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const SITE_URL = "https://utech-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    ...projectUrls,
  ];
}
