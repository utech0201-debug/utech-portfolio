"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

function isLivePreview(value: string) {
  return value.startsWith("https://");
}

function LivePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
      <iframe
        src={url}
        title={title + " live preview"}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allow="fullscreen"
      />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
        LIVE PREVIEW
      </div>
    </div>
  );
}

export default function ProjectGallery({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState(
    project.gallery[0] ?? project.image
  );

  const gallery = project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <section className="py-20">
      <h2 className="mb-10 text-3xl font-black">Gallery</h2>

      <motion.div
        layout
        className="overflow-hidden rounded-3xl border border-white/10"
      >
        {isLivePreview(selectedImage) ? (
          <LivePreview url={selectedImage} title={project.title} />
        ) : (
          <Image
            src={selectedImage}
            alt={project.title}
            width={1600}
            height={900}
            className="aspect-video w-full object-cover"
          />
        )}
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={
              isLivePreview(image)
                ? "Show live preview of " + project.title
                : "Show " + project.title + " gallery image"
            }
            className={`overflow-hidden rounded-2xl border transition ${
              selectedImage === image ? "border-blue-500" : "border-white/10"
            }`}
          >
            {isLivePreview(image) ? (
              <div className="relative aspect-video w-full bg-slate-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-blue-200">
                    LIVE SITE
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src={image}
                alt={project.title}
                width={400}
                height={220}
                className="aspect-video w-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}