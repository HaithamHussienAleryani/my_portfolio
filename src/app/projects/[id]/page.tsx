import ContactMeSection from "@/components/ContactMeSection";
import ProjectBanner from "@/components/projects-details/ProjectBanner";
import ProjectDetailsHeader from "@/components/projects-details/ProjectDetailsHeader";
import ProjectFeatures from "@/components/projects-details/ProjectFeatures";
import ProjectHeader from "@/components/projects-details/ProjectHeader";
import ProjectOverview from "@/components/projects-details/ProjectOverview";
import ProjectScreenshots from "@/components/projects-details/ProjectScreenshots";
import ProjectTechStack from "@/components/projects-details/ProjectTechStack";
import React from "react";

// type props = {
//   params: {
//     id: string;
//   };
// };
async function ProjectDetails() {
  // const { id } = await params;
  return (
    <div>
      <section className=" max-w-5xl px-5 md:px-6 mx-auto mt-30">
        <ProjectHeader date="2025" />
        <ProjectBanner />
        <ProjectDetailsHeader />
        <ProjectOverview />
        <ProjectScreenshots />
        <ProjectTechStack />
        <ProjectFeatures />
      </section>
      <ContactMeSection />
    </div>
  );
}

export default ProjectDetails;
