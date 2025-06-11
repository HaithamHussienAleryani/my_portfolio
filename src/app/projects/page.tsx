import ContactMeSection from "@/components/ContactMeSection";
import ProjectsCardsSection from "@/components/ProjectsCardsSection";

import SectionMainHeader from "@/components/SectionMainHeader";
import { client } from "@/sanity/client";
import { PROJECTS_QUERY } from "@/sanity/queries";
import React from "react";

async function ProjectsPage() {
  const projects = await client.fetch<any[]>(PROJECTS_QUERY, {});

  return (
    <section className=" mt-30 md:mt-40 main-container">
      <SectionMainHeader
        heading="My Work"
        title="Creating next level products"
      />
      <ProjectsCardsSection projects={projects} />
      <div className="mb-20"></div>
      <ContactMeSection />
    </section>
  );
}

export default ProjectsPage;
