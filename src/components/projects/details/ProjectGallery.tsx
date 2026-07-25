"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectGallery({
  project,
}: Props) {

  const [selectedImage, setSelectedImage] = useState(
    project.gallery[0] ?? project.image
  );

  return (

    <section className="py-20">

      <h2 className="mb-10 text-3xl font-black">
        Gallery
      </h2>

      <motion.div
        layout
        className="overflow-hidden rounded-3xl border border-white/10"
      >

        <Image
          src={selectedImage}
          alt={project.title}
          width={1600}
          height={900}
          className="aspect-video w-full object-cover"
        />

      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

        {project.gallery.map((image) => (

          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border transition ${
              selectedImage === image
                ? "border-blue-500"
                : "border-white/10"
            }`}
          >

            <Image
              src={image}
              alt={project.title}
              width={400}
              height={220}
              className="aspect-video w-full object-cover"
            />

          </button>

        ))}

      </div>

    </section>

  );

}