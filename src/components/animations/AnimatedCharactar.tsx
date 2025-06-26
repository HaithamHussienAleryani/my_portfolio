"use client";
import { useGSAP } from "@gsap/react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import gsap from "gsap/all";
import React, { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  useGSAP(() => {
    gsap.to(".animated-text", {
      scrollTrigger: {
        trigger: ".animated-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power1.out",
    });
  });
  return (
    <p
      style={{ lineHeight: 1 }}
      className={
        " text-xl animated-text md:text-3xl text-center opacity-30 font-bold  leading-none p-10 max-w-screen-xl  mx-auto"
      }
    >
      {paragraph}
    </p>
  );
}
