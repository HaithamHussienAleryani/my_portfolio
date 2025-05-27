import PrimaryButton from "./PrimaryButton";
import ProjectsCardsSection from "./ProjectsCardsSection";
import SectionHeader from "./SectionHeader";

function ProjectsSection() {
  return (
    <section className="mt-5 main-conainer max-w-sm  md:max-w-lg lg:max-w-6xl mx-auto">
      <SectionHeader header="MY WORK" />
      <h1 className="font-work-sans tracking-wider font-bold text-5xl mt-5 mb-3 ">
        Selected Projects
      </h1>
      <p>
        Here&apos;s a curated selection showcasing my expertise and the achieved
        results.
      </p>
      <ProjectsCardsSection />

      <div className="flex justify-center mt-10">
        <PrimaryButton title={"View All Projects"} href="/projects" />
      </div>
    </section>
  );
}

export default ProjectsSection;
