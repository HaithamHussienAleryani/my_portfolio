import ContactMeSection from "@/components/ContactMeSection";
import ProjectsCardsSection from "@/components/ProjectsCardsSection";
import RightsReservedSection from "@/components/RightsReservedSection";
import SectionMainHeader from "@/components/SectionMainHeader";
import React from "react";

function ProjectsPage() {
  return (
    <section className=" mt-30 md:mt-40 main-container">
      <SectionMainHeader
        heading="My Work"
        title="Creating next level products"
      />
      <ProjectsCardsSection />
      <ContactMeSection />
      <RightsReservedSection />
    </section>
  );
}

export default ProjectsPage;
