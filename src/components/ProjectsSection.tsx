import React from "react";
import SectionHeader from "./SectionHeader";

function ProjectsSection() {
  return (
    <section className="mt-5 main-conainer max-w-6xl mx-auto">
      <SectionHeader header="MY WORK" />
      <h1 className="font-work-sans tracking-wider font-bold text-5xl mt-5 mb-2 ">
        Selected Projects
      </h1>
      <p>
        Here&apos;s a curated selection showcasing my expertise and the achieved
        results.
      </p>
    </section>
  );
}

export default ProjectsSection;
