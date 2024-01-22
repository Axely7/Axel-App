import Image from "next/image";
import { Inter } from "next/font/google";
import { ParticlesContainer } from "@/components/ParticlesContainer";
import { ProjectsBtn } from "@/components/ProjectsBtn";
import { Avatar } from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Home() {
  return (
    <div className=" h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1"
          >
            Creating <br />{" "}
            <span className="text-blue-600">Digital Products</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hi, I&apos;m a Front End Developer committed to delivering top-notch
            services and user experiences. I have a diverse portfolio, including
            mobile applications (iOS and android), web applications, websites.{" "}
            <br />
            If you&apos;re interested, feel free to check out my work and
            contact me for collaborations or inquiries.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className=" w-full h-full absolute mix-blend-color-dodge ">
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
