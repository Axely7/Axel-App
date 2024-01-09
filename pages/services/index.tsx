import React from "react";

import { ServiceSlider } from "../../components/ServiceSlider";
import { Bulb } from "../../components/Bulb";
import { Circle } from "../../components/Circle";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ServicesPage = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circle />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Commodo in culpa nulla sint esse sunt. Cillum ex reprehenderit
              nulla voluptate eiusmod cupidatat officia deserunt labore.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default ServicesPage;
