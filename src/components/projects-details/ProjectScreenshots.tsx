import React from "react";
import { ProjectScreenshotItem } from "./ProjectSecreenItem";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectScreenshots() {
  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Project Screens" />
      <div className="my-6  flex flex-wrap gap-4">
        <ProjectScreenshotItem />
        <ProjectScreenshotItem />
        <ProjectScreenshotItem />
        <ProjectScreenshotItem />
        <ProjectScreenshotItem />
      </div>
    </section>
  );
}

export default ProjectScreenshots;
