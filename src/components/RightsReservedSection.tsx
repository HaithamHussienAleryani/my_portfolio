import React from "react";
import SocialMediaIconsSection from "./SocialMediaIcons";

function RightsReservedSection() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex main-conainer max-w-sm md:max-w-lg lg:max-w-6xl justify-center md:justify-between items-center rounded-3xl mx-auto mb-24">
      <span className="text-sm">
        © {currentYear} Haitham Hussein. All rights reserved.
      </span>
      <SocialMediaIconsSection className="hidden md:flex" />
    </div>
  );
}

export default RightsReservedSection;
