/* eslint-disable @next/next/no-img-element */
"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 mt-20">
      <h1 className="heading mb-10 uppercase mobile-header">
        A glimpse into <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="grid gap-6 sm:gap-y-8 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] mobile-spacing"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link} target="_blank">
              <div className="relative flex items-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                  />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute top-0 w-full h-full object-cover object-top"
                />
              </div>

              <h1 className="font-bold lg:text-lg md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-base md:text-xs text-sm text-purple">
                    Live Preview
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
