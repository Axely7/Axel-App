import React from "react";
import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
};

export const Transition = () => {
  return <div>Transition</div>;
};
