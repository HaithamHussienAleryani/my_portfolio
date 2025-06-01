import React from "react";

import PrimaryButton from "./PrimaryButton";
import SocialMediaIconsSection from "./SocialMediaIcons";

function ContactMeSection() {
  return (
    <section className="main-conainer max-w-sm md:max-w-lg lg:max-w-6xl bg-white dark:bg-OffBlack2 rounded-3xl mx-auto mb-10">
      <div className="flex  flex-col items-center justify-center p-6">
        <div className="flex mt-5 items-center bg-primary2 px-3 py-1 rounded-full justify-center space-x-2">
          <div className="size-1.5 bg-primary rounded-full"></div>
          <p className="text-sm">Available for work</p>
        </div>
        <p className=" text-4xl md:text-5xl font-bold  px-16 font-work-sans mt-7 md:w-1/2 mb-6 text-center">
          Let&apos;s Create Your Next Big Idea
        </p>
        <PrimaryButton className="my-3" title="Contact Me" />

        <div>
          <div className="flex md:hidden flex-wrap mt-4 justify-center space-x-4">
            <SocialMediaIconsSection className=" md:hidden " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
