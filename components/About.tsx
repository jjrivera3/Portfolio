"use client";

import { motion } from "framer-motion";

import { FaLocationArrow } from "react-icons/fa";
import CodeEditor from "./CodeEditor";
import MagicButton from "./MagicButton";

export function About() {
  return (
    <div className="h-[40rem] max-md:h-full w-full ">
      <section
        id="about"
        className="min-h-screen =flex items-center section-padding"
      >
        <div className="container-width flex gap-10 items-center max-md:flex-col">
          {/* Left Column - 55% Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[48%] max-md:w-full"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-purple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ABOUT ME
            </motion.h1>
            <motion.p
              className="text-lg md:text-md text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I’m Joseph, a Frontend Developer with 7 years of experience
              building engaging user interfaces. Based in Sacramento, CA, I’m
              passionate about turning ideas into seamless digital experiences.
              For me, coding is both a profession and a creative outlet,
              allowing me to craft meaningful products that make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-md:flex flex-col gap-4"
            >
              <a href="#projects">
                <MagicButton
                  title="Show My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - 45% Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[52%] max-md:w-full"
          >
            <CodeEditor />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
