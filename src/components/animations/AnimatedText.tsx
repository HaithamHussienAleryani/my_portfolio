"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, SplitText);
function AnimatedText({
  text,
  className,
  hasColor = false,
  duration,
  stagger,
  from,
  to,
}: {
  text: string;
  className?: string;
  hasColor?: boolean;
  duration: number;
  stagger?: number;
  from?: number;
  to?: number;
}) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const split = SplitText.create(textRef.current, { type: "words" });
      if (hasColor) {
        gsap.to(split.words.slice(from, to), {
          color: "var(--primary)",
          fontWeight: "bold",
        });
      }

      gsap.from(split.words, {
        opacity: 0,
        filter: "blur(20px)",
        y: 100,
        ease: "expo.out",
        duration,
        stagger: stagger ?? 0.1,
      });
    },
    { scope: textRef }
  );

  return (
    <div ref={textRef} className={cn(className)}>
      {text}
    </div>
  );
}

export default AnimatedText;
