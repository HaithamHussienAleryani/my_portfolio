import { cn } from "@/lib/utils";
import React from "react";
import { SocialIcon } from "react-social-icons";
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/your-github-username",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-twitter-handle",
  },
  {
    name: "Email",
    url: "mailto:           ",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/your-instagram-handle",
  },
];

function SocialMediaIconsSection({ className }: { className?: string }) {
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
