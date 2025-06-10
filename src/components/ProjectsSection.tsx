import PrimaryButton from "./PrimaryButton";
import ProjectsCardsSection from "./ProjectsCardsSection";

import SectionMainHeader from "./SectionMainHeader";

function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <section className="mt-5 main-container ">
      <SectionMainHeader
        title="Selected Projects"
        heading="MY WORK"
        description="  Here's a curated selection showcasing my expertise and the achieved
        results."
      />

      <ProjectsCardsSection projects={projects} />

      <div className="flex justify-center mt-10">
        <PrimaryButton title={"View All Projects"} href="/projects" />
      </div>
    </section>
  );
}

export default ProjectsSection;
