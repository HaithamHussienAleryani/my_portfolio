"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { cn } from "@/lib/utils";
gsap.registerPlugin(useGSAP, TextPlugin);
function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  useGSAP(() => {
    gsap.to("#text", {
      text: {
        value: text,
        delimiter: " ",
      },
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        console.log("Animation complete");
      },
    });
  }, []);

  return <div id="text" className={cn(className)}></div>;
}

export default AnimatedText;
