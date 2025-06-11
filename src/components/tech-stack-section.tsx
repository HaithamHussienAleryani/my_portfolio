import React from "react";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

import TechStackItem from "./TechStackItem";
import { TechStackIcons } from "@/constants/icons";
import { cn } from "@/lib/utils";

const TechStackSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn(className, "main-container  my-10")}>
      <div className="flex flex-col  justify-center items-center md:flex-row">
        <div className="relative h-20 group/static-hover md:h-24 flex flex-col justify-center   w-full">
          <InfiniteSlider
            speed={20}
            gap={30}
            className={" hidden md:block justify-center items-center"}
          >
            {TechStackIcons.getIcons(1).map((item, index) => (
              <TechStackItem
                invert={item.invert}
                key={index}
                icon={item.icon}
                name={item.name}
              />
            ))}
          </InfiniteSlider>

          <InfiniteSlider
            speed={20}
            gap={5}
            className={" block md:hidden  justify-center items-center"}
          >
            {TechStackIcons.getIcons(1).map((item, index) => (
              <TechStackItem
                invert={item.invert}
                key={index}
                icon={item.icon}
                name={item.name}
              />
            ))}
          </InfiniteSlider>

          <div className="bg-linear-to-r   from-background absolute inset-y-0 left-0 w-20"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
