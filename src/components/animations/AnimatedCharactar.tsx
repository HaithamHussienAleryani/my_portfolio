"use client";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import React from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  useGSAP(() => {
    const text = SplitText.create(".animated-text", { type: "chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: ".animated-text",
        start: "top 75%",
        end: "bottom 50%",
        scrub: 1,
      },
      opacity: 0.3,
      y: 0,
      stagger: 0.1,
      ease: "power1.out",
    });
  });
  return (
    <p
      className={
        " text-xl animated-text md:text-3xl text-center   font-bold tracking-wide p-10 max-w-screen-xl  mx-auto"
      }
    >
      {paragraph}
    </p>
  );
}
