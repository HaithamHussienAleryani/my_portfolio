import React from "react";

import AnimatedSocialMediaLinks from "./animations/AnimatedSocialMediaLinks";

function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      name: "GitHub",
      url: "https://github.com/yourprofile",
    },

    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourprofile",
    },
  ];
  return (
    <ul className=" space-x-4 hidden lg:flex">
      {socialLinks.map((link, index) => (
        <AnimatedSocialMediaLinks
          key={index}
          index={index}
          name={link.name}
          url={link.url}
        />
      ))}
    </ul>
  );
}

export default SocialMediaLinks;
