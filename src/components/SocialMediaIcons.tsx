import { cn } from "@/lib/utils";
import { client } from "@/sanity/client";
import { SOCIAL_MEDIA_QUERY } from "@/sanity/queries";
import React from "react";
import { SocialIcon } from "react-social-icons";

type props = {
  className?: string;
};

async function SocialMediaIconsSection({ className }: props) {
  const socialLinks = await client.fetch<any[]>(SOCIAL_MEDIA_QUERY, {});

  return (
    <div
      className={cn("flex flex-wrap mt-4 justify-center space-x-4", className)}
    >
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.name}
          bgColor="transparent"
          className="p-0 !size-8 !invert-100 dark:!invert-0 md:!size-10 hover:scale-110 transition-transform duration-300"
          network={link.name.toLowerCase()}
          url={link.url}
        />
      ))}
    </div>
  );
}

export default SocialMediaIconsSection;
