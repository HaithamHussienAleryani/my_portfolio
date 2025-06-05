import React from "react";
import { ProjectScreenshotItem } from "./ProjectSecreenItem";

function ProjectScreenshots() {
  return (
    <section className="mt-14">
      <div className="border-b-1 ">
        <p className="text-2xl  mb-2 font-bold font-work-sans">
          Project Screens
        </p>
      </div>
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
