"use client";
import { motion } from "framer-motion";
import React from "react";

function AnimatedDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      }}
      className="h-[1px] w-full bg-gray-300"
    ></motion.div>
  );
}

export default AnimatedDivider;
