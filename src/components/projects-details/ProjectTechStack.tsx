import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectTechStack({ technologies }: { technologies: any[] }) {
  return (
    <section className="mb-18 ">
      <ProjectBorderedHeader header="Tech Stack" />
      <div>
        <ul className="space-y-3 list-disc ms-6 md:ms-10 mt-5">
          {technologies.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="underline me-2 font-bold">
                {item.title}
              </a>
              - {item.description} .
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectTechStack;
