"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  timeline: string[];
}

export default function ProjectTimeline({
  timeline,
}: Props) {
  return (
    <section className="mt-24">

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          mb-14
          text-center
          text-4xl
          font-black
        "
      >
        Development Timeline
      </motion.h2>

      <div
        className="
          relative
          mx-auto
          max-w-3xl
        "
      >
        {/* Vertical Line */}
        <div
          className="
            absolute
            left-5
            top-0
            h-full
            w-1
            rounded-full
            bg-gradient-to-b
            from-blue-600
            via-cyan-500
            to-violet-600
          "
        />

        <div className="space-y-10">

          {timeline.map((step, index) => (

            <motion.div
              key={step}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                relative
                ml-16
              "
            >

              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  -left-16
                  top-2
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  shadow-lg
                  shadow-blue-600/40
                "
              >
                <CheckCircle2
                  size={20}
                  className="text-white"
                />
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                "
              >
                <p className="text-lg font-semibold">
                  {step}
                </p>
              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}