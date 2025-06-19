import ContactMeSection from "@/components/ContactMeSection";
import ProjectBanner from "@/components/projects-details/ProjectBanner";
import ProjectBuildStep from "@/components/projects-details/ProjectBuildStep";
import ProjectDetailsHeader from "@/components/projects-details/ProjectDetailsHeader";
import ProjectFeatures from "@/components/projects-details/ProjectFeatures";
import ProjectHeader from "@/components/projects-details/ProjectHeader";
import ProjectOverview from "@/components/projects-details/ProjectOverview";
import ProjectScreenshots from "@/components/projects-details/ProjectScreenshots";
import ProjectTechStack from "@/components/projects-details/ProjectTechStack";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/client";
import { PROJECT_DETAILS_QUERY } from "@/sanity/queries";

async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await client.fetch(PROJECT_DETAILS_QUERY, { id });
  console.log(project);
  return (
    <div>
      <section className=" max-w-5xl px-5 md:px-6 mx-auto mt-30">
        <ProjectHeader date={formatDate(project._createdAt)} />
        <ProjectBanner image={project.projectImage} />
        <ProjectDetailsHeader
          role={project.role}
          client={project.client}
          technologies={project.technologies}
          title={project.title}
          githubLink={project.githubLink}
          description={project.description}
          liveDemoLink={project.liveDemoLink}
        />
        <ProjectOverview overview={project.overview} />
        <ProjectScreenshots screenshots={project.screenshots} />
        <ProjectTechStack />
        <ProjectFeatures />
        <ProjectBuildStep />
      </section>
      <ContactMeSection />
    </div>
  );
}

export default ProjectDetails;
