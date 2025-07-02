import React from "react";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import StaticsItem from "@/components/statics-item";
import StaticInfoSeparator from "@/components/static-info-separator";

const StaticsSection = ({ items }: { items: string[] }) => {
  return (
    <section className="mt-20">
      <div className="flex border-t border-b flex-col justify-center   items-center md:flex-row">
        <div className="relative h-16 group/static-hover md:h-24 flex flex-col justify-center  w-full">
          <InfiniteSlider
            speed={20}
            gap={30}
            className={"hidden md:block  justify-center items-center"}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex space-x-5 items-center justify-center"
              >
                <StaticsItem staticRate={item} staticDesc={item} />
                <StaticInfoSeparator />
              </div>
            ))}
          </InfiniteSlider>

          <InfiniteSlider speed={20} gap={10} className={"block md:hidden "}>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex space-x-5 items-center justify-center"
              >
                <StaticsItem staticRate={item} staticDesc={item} />
                <StaticInfoSeparator />
              </div>
            ))}
          </InfiniteSlider>

          <div className="bg-linear-to-r   from-background absolute inset-y-0 left-0 w-20"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
};

export default StaticsSection;
