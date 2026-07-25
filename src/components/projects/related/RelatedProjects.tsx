"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";

interface Props {
  currentSlug: string;
}

export default function RelatedProjects({
  currentSlug,
}: Props) {
  const relatedProjects = projects.filter(
    (project) => project.slug !== currentSlug
  );

  return (
    <section className="mt-28">

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          mb-12
          text-center
          text-4xl
          font-black
        "
      >
        Related Projects
      </motion.h2>

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >
        {relatedProjects.map((project) => (

          <motion.div
            key={project.id}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Link
              href={`/projects/${project.slug}`}
              className="
                group
                block
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >

              <div className="relative h-60">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                  "
                />

              </div>

              <div className="p-7">

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-400
                    leading-7
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies
                    .slice(0, 4)
                    .map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-blue-600/20
                          px-3
                          py-1
                          text-xs
                          text-blue-300
                        "
                      >
                        {tech}
                      </span>

                    ))}
                </div>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-400
                  "
                >
                  View Case Study

                  <ArrowRight
                    size={18}
                    className="
                      transition
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </div>

            </Link>

          </motion.div>

        ))}
      </div>

    </section>
  );
}