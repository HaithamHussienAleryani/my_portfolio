import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import HandShakeIcon from "./HandShakeIcon";
import SocialMediaLinks from "./SocialMediaLinks";
import { TextEffect } from "./motion-primitives/text-effect";
import AnimatedDivider from "./animations/AnimatedDivider";
import ScreenWrapper from "./ScreenWrapper";
import { PortfolioContent } from "@/data/portfolioContent";
import useSeperateText from "@/hooks/useSeperateText";
import AnimatedText from "./animations/AnimatedText";

export default function HeroSection({
  content,
}: {
  content: PortfolioContent;
}) {
  const greetingContent = useSeperateText(content.hero_header);
  return (
    <ScreenWrapper>
      <div className={"relative h-fit"}>
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
                      className={"pt-2 m-0 text-md "}
                    >
                      {content.hero_greating}
                    </TextEffect>
                  </div>

                  <AnimatedText
                    text={content.hero_header}
                    className="mt-5 tracking-widest font-work-sans lg:w-5/6   text-2xl md:text-6xl font-semibold capitalize lg:mt-0"
                  ></AnimatedText>

                  <div className="flex flex-col space-y-8 lg:flex-row mt-8  justify-center lg:mt-12 space-x-6 items-center">
                    <AnimatedDivider />
                    <TextEffect
                      per="word"
                      as="h3"
                      preset="blur"
                      speedReveal={2.5}
                    >
                      {content.hero_sub_header}
                    </TextEffect>
                  </div>

                  <div className="mt-12 flex justify-start bg- flex-col items-center gap-2 sm:flex-row lg:justify-between">
                    <SocialMediaLinks socialMedia={content.social_media} />
                    <PrimaryButton
                      href="/contact"
                      title={"Let's Work Together"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ScreenWrapper>
  );
}
