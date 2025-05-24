import { ArrowUp, ArrowUpRight } from "lucide-react";
import React from "react";

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
        <li key={index} className="mb-2 flex space-x-2">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="  uppercase"
          >
            {link.name}
          </a>
          <ArrowUpRight size={18} />
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaLinks;
