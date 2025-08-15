import ProjectBorderedHeader from "./ProjectBorderedHeader";
import { ProjectScreenshotItem } from "./ProjectSecreenItem";

function ProjectScreenshots({ screenshots }: { screenshots: any[] }) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <section className="mb-14">
      <ProjectBorderedHeader header="Project Screens" />
      <div className="my-6  flex flex-wrap gap-4">
        {screenshots.map((image, index) => (
          <ProjectScreenshotItem key={index} image={image} />
        ))}
      </div>
    </section>
  );
}

export default ProjectScreenshots;
