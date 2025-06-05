import Image from "next/image";
import React from "react";
import ProjectBannerImage from "../../../public/project-banner.webp";

function ProjectBanner() {
  return (
    <div className="mt-8">
      <Image
        src={ProjectBannerImage}
        alt="Project banner"
        className="rounded-2xl"
      />
    </div>
  );
}

export default ProjectBanner;
