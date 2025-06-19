import React from "react";
import { ProjectScreenshotItem } from "./ProjectSecreenItem";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectScreenshots({ screenshots }: { screenshots: any[] }) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Project Screens" />
      <div className="my-6  flex flex-wrap gap-4">
        {screenshots.map((image, index) => (
          <ProjectScreenshotItem key={index} image={image} />
        ))}
      </div>
    </section>
  );
}

export default ProjectScreenshots;
