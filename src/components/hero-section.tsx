import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import HandShakeIcon from "./HandShakeIcon";
import SocialMediaLinks from "./SocialMediaLinks";

// pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44

export default function HeroSection() {
  return (
    <div className={"relative h-fit pb-10"}>
      <main className="main-container px-10 ">
        <section>
          <div className=" pt-30 md:pt-40  ">
            <div className="relative justify-center items-start">
              <div className="mx-auto  text-left">
                <div className="flex mb-10  items-center gap-x-2">
                  <HandShakeIcon />
                  <p className={"pt-2 m-0 text-lg"}>Hi! it&apos;s Haitham,</p>
                </div>
                <h1 className="mt-6   lg:w-5/6 text-4xl md:text-7xl font-semibold capitalize lg:mt-0">
                  Crafting
                  <span className="text-primary">
                    purpose driven experiences
                  </span>
                  that inspire & engage.
                </h1>

                <div className="flex flex-col space-y-8 lg:flex-row mt-8  justify-center lg:mt-12 space-x-6 items-center">
                  <div className="h-[1px] w-full bg-gray-300"></div>
                  <p>
                    Flutter developer with a passion for creating beautiful and
                    functional mobile applications. I specialize in building
                    cross-platform apps that provide a seamless user experience
                  </p>
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
