import ProjectBanner from "@/components/projects-details/ProjectBanner";
import ProjectDetailsHeader from "@/components/projects-details/ProjectDetailsHeader";
import ProjectHeader from "@/components/projects-details/ProjectHeader";
import ProjectOverview from "@/components/projects-details/ProjectOverview";
import React from "react";

type props = {
  params: {
    id: string;
  };
};
async function ProjectDetails({ params }: props) {
  // const { id } = await params;
  return (
    <section className=" max-w-5xl px-5 md:px-6 mx-auto mt-30">
      <ProjectHeader date="2025" />
      <ProjectBanner />
      <ProjectDetailsHeader />
      <ProjectOverview />
    </section>
  );
}

export default ProjectDetails;
