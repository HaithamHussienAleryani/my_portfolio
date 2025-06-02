import React from "react";
import SocialMediaIconsSection from "./SocialMediaIcons";

function RightsReservedSection() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex main-container justify-center md:justify-between items-center mb-24 md:mb-4 ">
      <span className="text-xs md:text-sm">
        © {currentYear} Haitham Hussein. All rights reserved.
      </span>
      <SocialMediaIconsSection className="hidden md:flex" />
    </div>
  );
}

export default RightsReservedSection;
