"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Terminal() {
  return (
    <section
      className="
      mx-auto
      max-w-7xl
      px-6
      py-24
      "
    >

      <motion.div
        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:0.6
        }}

        className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10

        bg-black/70

        shadow-2xl

        backdrop-blur-xl
        "
      >


        {/* Terminal Header */}

        <div
          className="
          flex
          items-center
          gap-3

          border-b
          border-white/10

          px-5
          py-4
          "
        >

          <div className="flex gap-2">

            <span className="
            h-3
            w-3
            rounded-full
            bg-red-500
            "/>

            <span className="
            h-3
            w-3
            rounded-full
            bg-yellow-500
            "/>

            <span className="
            h-3
            w-3
            rounded-full
            bg-green-500
            "/>

          </div>


          <div
          className="
          ml-3
          flex
          items-center
          gap-2
          text-sm
          text-gray-400
          "
          >

            <TerminalIcon size={16}/>

            utech-terminal

          </div>


        </div>




        {/* Terminal Body */}

        <div
        className="
        space-y-4

        p-6

        font-mono

        text-sm

        text-green-400

        "
        >

          <p>
            <span className="text-blue-400">
              utech@portfolio
            </span>
            :~$ whoami
          </p>


          <p className="text-white">
            Utech - Full Stack Developer
          </p>



          <p>
            <span className="text-blue-400">
              utech@portfolio
            </span>
            :~$ skills
          </p>


          <p className="text-white">
            Next.js
            <br/>
            TypeScript
            <br/>
            Tailwind CSS
            <br/>
            Prisma
            <br/>
            PostgreSQL
            <br/>
            Linux
            <br/>
            Cybersecurity
          </p>




          <p>
            <span className="text-blue-400">
              utech@portfolio
            </span>
            :~$ status
          </p>


          <p className="text-white">
            Available for internships,
            freelance and collaborations ✔
          </p>



          <p>
            <span className="text-blue-400">
              utech@portfolio
            </span>
            :~$
            <span className="animate-pulse">
              █
            </span>
          </p>


        </div>


      </motion.div>


    </section>
  );
}