import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectOverview() {
  return (
    <section className="mt-14">
      <ProjectBorderedHeader header="Overview" />
      <p className="mt-4">
        Built using React Native, this app delivers a fast, responsive, and
        platform-agnostic experience, making it accessible across Android and
        iOS devices. By leveraging the power of modern video streaming
        technologies, the app ensures smooth playback and minimal buffering,
        even on low-bandwidth networks.
      </p>
    </section>
  );
}

export default ProjectOverview;
