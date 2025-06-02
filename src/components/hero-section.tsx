import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import HandShakeIcon from "./HandShakeIcon";
import SocialMediaLinks from "./SocialMediaLinks";
import { TextEffect } from "./motion-primitives/text-effect";
import AnimatedDivider from "./animations/AnimatedDivider";

// pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44

export default function HeroSection() {
  return (
    <div className={"relative h-fit pb-5"}>
      <main>
        <section>
          <div className=" pt-30 md:pt-40  ">
            <div className="relative justify-center items-start">
              <div className="mx-auto  text-left">
                <div className="flex mb-10  items-center gap-x-2 racking-wider">
                  <HandShakeIcon />
                  <TextEffect
                    preset="fade-in-blur"
                    speedReveal={0.6}
                    speedSegment={0.3}
                    className={"pt-2 m-0 text-lg "}
                  >
                    Hey! it&apos;s Haitham,
                  </TextEffect>
                </div>

                <div className="flex flex-wrap lg:whitespace-nowrap gap-0 tracking-widest font-work-sans">
                  <TextEffect
                    preset="fade-in-blur"
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className="mt-6 lg:w-5/6  text-4xl md:text-7xl font-semibold capitalize lg:mt-0"
                  >
                    A React developer Delivering
                  </TextEffect>
                  <TextEffect
                    preset="fade-in-blur"
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className=" lg:w-5/6 text-primary  text-4xl md:text-7xl font-semibold capitalize lg:mt-0"
                  >
                    purpose driven experiences
                  </TextEffect>
                  <TextEffect
                    preset="fade-in-blur"
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className="lg:w-5/6  text-4xl md:text-7xl font-semibold capitalize lg:mt-0"
                  >
                    that inspire & engage.
                  </TextEffect>
                </div>

                <div className="flex flex-col space-y-8 lg:flex-row mt-8  justify-center lg:mt-12 space-x-6 items-center">
                  <AnimatedDivider />
                  <TextEffect
                    per="word"
                    as="h3"
                    preset="blur"
                    speedReveal={2.5}
                  >
                    Flutter developer with a passion for creating beautiful and
                    functional mobile applications. I specialize in building
                    cross-platform apps that provide a seamless user experience
                  </TextEffect>
                </div>

                <div className="my-12 flex justify-start bg- flex-col items-center gap-2 sm:flex-row lg:justify-between">
                  <SocialMediaLinks />
                  <PrimaryButton title={"Let's Work Together"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
