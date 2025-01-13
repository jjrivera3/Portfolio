import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Background Overlay */}
      <div className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center h-full">
        <h2 className="uppercase tracking-widest text-sm text-blue-100">
          Building Bridges Between Ideas and Innovation
        </h2>
        <TextGenerateEffect
          className="text-[40px] md:text-5xl lg:text-6xl mb-2"
          words="Transforming Concepts into Seamless User Experiences"
        />
        <p className="text-sm md:text-lg lg:text-2xl mb-4">
          Hi! 👋 I&apos;m Joseph, a{" "}
          <span className="text-gradient">Frontend Developer</span>.
        </p>
        {/* Social Media Icons in Circles */}
        <div className="flex gap-6 mb-5">
          <a
            href="https://www.linkedin.com/in/josephrivera3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground-muted rounded-full hover:text-purple-600"
          >
            <FaLinkedin className="text-xl text-gray-800 dark:text-gray-300" />
          </a>
          <a
            href="https://github.com/jjrivera3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground-muted rounded-full hover:text-purple-600"
          >
            <FaGithub className="text-xl text-gray-800 dark:text-gray-300" />
          </a>
          <a
            href="mailto:joseph@codewithjoe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground-muted rounded-full hover:text-purple-600"
          >
            <FaEnvelope className="text-xl text-gray-800 dark:text-gray-300" />
          </a>
        </div>
        <div className="md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <a href="#projects">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="/joseph_rivera_resume.pdf"
            download="Joseph_Rivera_Resume.pdf"
            className="relative inline-flex items-center justify-center h-12 overflow-hidden rounded-xl px-7 text-sm font-semibold text-white focus:outline-none gap-2 hover:text-purple-600"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
