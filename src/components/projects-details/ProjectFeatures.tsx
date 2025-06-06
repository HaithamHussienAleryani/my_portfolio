import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";
const features: { title: string; description: string }[] = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    title: "TypeScript",

    description: "A strongly typed programming language",
  },
  {
    title: "Node.js",

    description: "A JavaScript runtime environment",
  },
];
function ProjectFeatures() {
  return (
    <section className="my-18 ">
      <ProjectBorderedHeader header="Features" />
      <div>
        <ul className="space-y-3 list-disc ms-6 md:ms-10  mt-5">
          {features.map((item, index) => (
            <li key={index}>
              <span className="font-bold me-2">{item.title}:</span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectFeatures;
