import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";
import ProjectCodeSnippit from "./ProjectCodeSnippit";
import { TBuildStep } from "@/data/types";

function ProjectBuildStep({ buildSteps }: { buildSteps: TBuildStep[] }) {
  if (!buildSteps || buildSteps.length === 0) {
    return null; // Return null if there are no build steps to display
  }
  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Build Steps" />
      <div className="mt-10">
        <ul className="space-y-5 list-decimal ms-6 md:ms-10 mt-5 mb-20">
          {buildSteps.map((item, index) => (
            <ProjectCodeSnippit item={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectBuildStep;
