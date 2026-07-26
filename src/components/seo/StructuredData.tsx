interface PersonStructuredDataProps {
  siteUrl: string;
}

interface ProjectStructuredDataProps {
  siteUrl: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

function SafeJsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: json,
      }}
    />
  );
}

export function PersonStructuredData({
  siteUrl,
}: PersonStructuredDataProps) {
  return (
    <SafeJsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Utech",
        url: siteUrl,
        jobTitle: "Full-Stack Developer",
        description:
          "Full-Stack Developer specializing in Next.js, TypeScript, modern web applications and cybersecurity.",
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "Cybersecurity",
          "Networking",
          "Linux",
        ],
        sameAs: [
          "https://github.com/utech0201-debug",
        ],
      }}
    />
  );
}

export function ProjectStructuredData({
  siteUrl,
  title,
  description,
  slug,
  image,
  technologies,
  github,
  demo,
}: ProjectStructuredDataProps) {
  const projectUrl = `${siteUrl}/projects/${slug}`;

  return (
    <SafeJsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name: title,
        description,
        url: projectUrl,
        image: `${siteUrl}${image}`,
        programmingLanguage: technologies,
        author: {
          "@type": "Person",
          name: "Utech",
          url: siteUrl,
        },
        ...(github ? { codeRepository: github } : {}),
        ...(demo ? { installUrl: demo } : {}),
      }}
    />
  );
}
