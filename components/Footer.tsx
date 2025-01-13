/* eslint-disable @next/next/no-img-element */
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Excited to bring <span className="text-purple">innovation</span> and
          <span className="text-purple"> creativity</span> to your team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect and discuss how I can contribute to your next big
          success.
        </p>
        <a href="mailto:joseph@codewithjoe.io">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          <div>
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
                className="p-3 bg-foreground-muted rounded-full hover:text-purple-600"
              >
                <FaEnvelope className="text-xl text-gray-800 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
