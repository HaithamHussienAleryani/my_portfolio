import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

const techStack: { title: string; link: string; description: string }[] = [
  {
    title: "React",
    link: "https://reactjs.org/",
    description: "A JavaScript library for building user interfaces",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    description: "A strongly typed programming language",
  },
  {
    title: "Node.js",
    link: "https://nodejs.org/en/",
    description: "A JavaScript runtime environment",
  },
];

function ProjectTechStack() {
  return (
    <section className="mt-18 ">
      <ProjectBorderedHeader header="Tech Stack" />
      <div>
        <ul className="space-y-3 list-disc ms-6 md:ms-10 mt-5">
          {techStack.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="underline me-2 font-bold">
                {item.title}
              </a>
              - {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectTechStack;
