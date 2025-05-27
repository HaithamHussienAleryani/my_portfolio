"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { TProject } from "@/data/types";
import { cn } from "@/lib/utils";

const projects: TProject[] = [
  {
    title: "Project One",
    description: "This is a brief description of project one.",
    imageUrl:
      "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2020/03/free-iphone-11-mockup-ui-ux-app-presentation-Leon_dsgn-110320-prev1.jpg?fit=1400%2C1050&ssl=1",
    link: "#",
    date: "2023",
    bgColor: "#32a852",
  },
  {
    title: "Project Two",
    description: "This is a brief description of project two.",
    imageUrl:
      "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2020/03/free-iphone-11-mockup-ui-ux-app-presentation-Leon_dsgn-110320-prev1.jpg?fit=1400%2C1050&ssl=1",
    link: "#",
    date: "2023",
    bgColor: "#22a2d2",
  },
  {
    title: "Project Three",
    description: "This is a brief description of project three.",
    imageUrl:
      "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2020/03/free-iphone-11-mockup-ui-ux-app-presentation-Leon_dsgn-110320-prev1.jpg?fit=1400%2C1050&ssl=1",
    link: "#",
    date: "2023",
    bgColor: "#50a2d2",
  },
  {
    title: "Project Four",
    description: "This is a brief description of project four.",
    imageUrl:
      "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2020/03/free-iphone-11-mockup-ui-ux-app-presentation-Leon_dsgn-110320-prev1.jpg?fit=1400%2C1050&ssl=1",
    link: "#",
    date: "2023",
    bgColor: "#a2d250",
  },
];

function ProjectsCardsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="py-5 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "transition-opacity duration-500 ease-linear",
              // Moved conditional margin here
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-50" // Apply opacity if another card is hovered
                : "opacity-100"
            )}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCardsSection;
