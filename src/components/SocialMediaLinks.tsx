import React from "react";

import AnimatedSocialMediaLinks from "./animations/AnimatedSocialMediaLinks";

function SocialMediaLinks({ socialMedia }: { socialMedia: any[] }) {
  return (
    <ul className=" space-x-4 hidden lg:flex">
      {socialMedia.map((link, index) => (
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
