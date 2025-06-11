"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

import { cn } from "@/lib/utils";

function ProjectsCardsSection({ projects }: { projects: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="py-5 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-30 mx-auto">
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
