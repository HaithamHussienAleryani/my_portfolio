import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectOverview({ overview }: { overview: string }) {
  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Overview" />
      <p className="mt-4">{overview}</p>
    </section>
  );
}

export default ProjectOverview;
