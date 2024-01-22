import { Avatar } from "@/components/Avatar";
import { Circle } from "@/components/Circle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaAws } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

import { SiNextdotjs, SiTailwindcss, SiFlutter } from "react-icons/si";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"HTML"} />,
          <FaCss3 key={"CSS"} />,
          <BiLogoTypescript key={"TypeScript"} />,
          <FaReact key={"React"} />,
          <SiNextdotjs key={"NextJS"} />,
          <SiTailwindcss key={"Tailwind"} />,
        ],
      },
      {
        title: "Mobile Development",
        icons: [
          <BiLogoTypescript key={"TypeScript"} />,
          <FaReact key={"React Native"} />,
          <SiFlutter key={"Flutter"} />,
        ],
      },
      {
        title: "Cloud",
        icons: [<FaAws key={"AWS"} />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key={"Figma"} />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer - Akibot",
        stage: "2018 - 2022",
      },
      {
        title: "Front End Developer - SARCAN",
        stage: "2022 - Today",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.S in Mechatronic Engineering - UNAM",
        stage: "2022",
      },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="h-full overflow-y-scroll bg-primary/30 py-32 text-center xl:text-left">
      <Circle />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2"
          >
            Get to know <span className="text-accent">me.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify"
          >
            I'm passionate about technology and strongly believe that it is akin
            to real-world magic, which is why I fell in love with creating
            digital products. My goal is to empower users and customers to
            achieve their goals and desires. I not only focus on building
            digital tools that exceed functional expectations but also
            prioritize integrating beautiful designs in our tools, applications,
            and websites. My expertise lies in backend development, including
            API endpoints, websockets, and serverless solutions with AWS, as
            well as frontend development for mobile apps (iOS and Android), full
            web applications, and websites.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div> */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div> */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  {"stage" in item ? <div>{item.stage}</div> : null}
                  <div className="flex gap-x-4">
                    {"icons" in item
                      ? item.icons?.map((icon, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className=" text-white"
                              title={icon.key as string}
                            >
                              <div className="flex justify-center text-2xl">
                                {icon}
                              </div>
                              <p className="text-sm mt-1"> {icon.key}</p>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
