import React from "react";

import PrimaryButton from "./PrimaryButton";
import SocialMediaIconsSection from "./SocialMediaIcons";
import { client } from "@/sanity/client";
import { CONTACT_ME_SECTION_QUERY } from "@/sanity/queries";

async function ContactMeSection() {
  const contactMeContent = await client.fetch(CONTACT_ME_SECTION_QUERY);

  return (
    <section className="  main-container mb-10">
      <div className="flex bg-white dark:bg-OffBlack2 rounded-3xl  flex-col items-center justify-center p-6">
        {contactMeContent.available && (
          <div className="flex mt-5 items-center bg-primary2 px-3.5 py-1 rounded-full justify-center space-x-2">
            <div className="size-1.5 bg-primary rounded-full"></div>
            <p className="text-xs md:text-sm">Available for work</p>
          </div>
        )}

        <p className=" text-4xl lg:text-5xl font-bold  lg:px-0 lg:w-1/2 font-work-sans mt-7 px-5   mb-6 text-center">
          {contactMeContent.contact_me_text}
        </p>
        <PrimaryButton href="/contact" className="my-3" title="Contact Me" />

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
