import React from "react";
import SocialMediaIconsSection from "../SocialMediaIcons";
import MeImage from "../../../public/me.jpg";
import Image from "next/image";

function ContactMeCard() {
  return (
    <div className="bg-white h-fit dark:bg-OffBlack2 rounded-3xl  flex-col px-7 pt-7 pb-3 ">
      <div className="flex bg-white dark:bg-OffBlack2 rounded-3xl  flex-col ">
        <div className="flex  items-center bg-primary2 w-fit px-3.5 py-1 rounded-full justify-center space-x-2">
          <div className="size-1.5 bg-primary rounded-full"></div>
          <p className="text-xs md:text-sm">Available for work</p>
        </div>
        <div className="border p-1 my-5 rounded-full w-fit h-fit">
          <Image
            src={MeImage}
            alt="Haitham Image"
            className="rounded-full size-18   object-cover "
          />
        </div>

        <p>
          My inbox is always open, Whether you have a project or just want to
          say Hi. I would love to hear from you. Feel free to contact me and
          I&apos;ll get back to you.
        </p>
        <div>
          <div className="flex  flex-wrap mt-4 space-x-4">
            <SocialMediaIconsSection className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMeCard;
