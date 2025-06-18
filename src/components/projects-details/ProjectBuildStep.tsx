import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";
import ProjectCodeSnippit from "./ProjectCodeSnippit";

const steps = [
  {
    title: "Clone this repo",
    code: "git clone https://github.com/DevrajDC/dc-code-screenshot && cd code-screenshot",
  },
  {
    title: "Install dependencies",
    code: "npm install",
  },
  {
    title: "Run the app",
    code: "npm run dev",
  },
];

function ProjectBuildStep() {
  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Build Steps" />
      <div className="mt-10">
        <ul className="space-y-5 list-decimal ms-6 md:ms-10 mt-5 mb-20">
          {/* {steps.map((item, index) => (
            <ProjectCodeSnippit item={item} key={index} />
          ))} */}
        </ul>
      </div>
    </section>
  );
}

export default ProjectBuildStep;
