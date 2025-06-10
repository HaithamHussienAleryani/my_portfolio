import React from "react";

import AnimatedSocialMediaLinks from "./animations/AnimatedSocialMediaLinks";

function SocialMediaLinks({ socialMedia }: { socialMedia: any[] }) {
  const socials = socialMedia ?? [];
  return (
    <ul className=" space-x-4 hidden lg:flex">
      {socials.map((link, index) => (
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
