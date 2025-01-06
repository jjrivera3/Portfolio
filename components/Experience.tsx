"use client";
import { experiences } from "@/data";
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { TracingBeam } from "./ui/TracingBeam";

const Experience = () => {
  return (
    <>
      <div className=" border-neutral-900 pb-4 mt-[150px]">
        <h2 className="text-4xl md:text-5xl font-bold mt-20 text-gradient text-purple text-center mb-20 uppercase">
          Work and Educational Experience
        </h2>
        <TracingBeam className="px-4">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm font-semibold text-neutral-200">
                  {experience.year}
                </p>
              </div>
              <div className="w-full lg:w-3/4 flex items-start">
                {/* Icon for role */}
                <div className="mr-3 mt-1">
                  {experience.logo === "briefcase" && (
                    <FaBriefcase className="text-purple text-xl -mt-1" />
                  )}
                  {experience.logo === "graduationHat" && (
                    <FaGraduationCap className="text-purple text-xl -mt-1" />
                  )}
                </div>
                {/* Role and description */}
                <div>
                  <h6 className="mb-2 font-semibold">
                    {experience.role}{" "}
                    <span className="text-neutral-400">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-neutral-400">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </TracingBeam>
      </div>
    </>
  );
};

export default Experience;
