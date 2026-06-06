"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const HeroVisual = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reverseFrameRef = useRef<number | null>(null);
  const reverseTimestampRef = useRef<number | null>(null);
  const directionRef = useRef<"forward" | "reverse">("forward");
  const speed = 0.8;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mounted) return;

    const cancelReverse = () => {
      if (reverseFrameRef.current !== null) {
        cancelAnimationFrame(reverseFrameRef.current);
        reverseFrameRef.current = null;
      }
      reverseTimestampRef.current = null;
    };

    const playForward = async () => {
      cancelReverse();
      directionRef.current = "forward";
      video.playbackRate = speed;

      try {
        await video.play();
      } catch {
        // Ignore autoplay interruptions and let the browser retry on interaction.
      }
    };

    const reverseStep = (timestamp: number) => {
      if (directionRef.current !== "reverse") return;

      if (reverseTimestampRef.current === null) {
        reverseTimestampRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - reverseTimestampRef.current) / 1000;
      reverseTimestampRef.current = timestamp;
      video.currentTime = Math.max(0, video.currentTime - deltaSeconds * speed);

      if (video.currentTime <= 0.02) {
        video.currentTime = 0;
        void playForward();
        return;
      }

      reverseFrameRef.current = requestAnimationFrame(reverseStep);
    };

    const playReverse = () => {
      cancelReverse();
      directionRef.current = "reverse";
      video.pause();
      reverseFrameRef.current = requestAnimationFrame(reverseStep);
    };

    const handleTimeUpdate = () => {
      if (
        directionRef.current === "forward" &&
        video.duration &&
        video.currentTime >= video.duration - 0.05
      ) {
        playReverse();
      }
    };

    void playForward();
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      cancelReverse();
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.pause();
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className=" absolute inset-e-0 bottom-1 opacity-50 xl:opacity-100 w-2/3  xl:w-1/3 h-10/12 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent" />
      <video
        ref={videoRef}
        src={`/hero-video-${theme}.mp4`}
        playsInline
        autoPlay
        muted
        preload="none"
        className="h-full   w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0  h-24 bg-linear-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroVisual;
