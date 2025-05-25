"use client";
import React from "react";
import { TextEffect } from "../motion-primitives/text-effect";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type SocialLinksProps = {
  name: string;
  url: string;
  index: number;
};

function AnimatedSocialMediaLinks(props: SocialLinksProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: props.index * 0.3,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="mb-2 flex space-x-2"
    >
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="  uppercase"
      >
        <TextEffect preset="slide">{props.name}</TextEffect>
      </a>
      <ArrowUpRight size={18} />
    </motion.li>
  );
}

export default AnimatedSocialMediaLinks;
