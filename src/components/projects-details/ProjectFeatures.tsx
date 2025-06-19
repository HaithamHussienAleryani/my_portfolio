import React from "react";
import ProjectBorderedHeader from "./ProjectBorderedHeader";

function ProjectFeatures({
  features,
}: {
  features: { title: string; description: string }[];
}) {
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
