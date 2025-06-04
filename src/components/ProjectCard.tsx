import { TProject } from "@/data/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project, index }: { project: TProject; index: number }) {
  return (
    <div className={cn(index % 2 !== 0 ? "sm:pt-14" : "pt-0")}>
      <Link href={project.link} className="flex  flex-col">
        <div
          style={{ backgroundColor: project.bgColor }}
          className="rounded-4xl"
        >
          <div className="flex justify-center items-center p-12 sm:p-6  lg:py-12  ">
            <Image
              src={project.imageUrl}
              alt={`${project.title} image`}
              width={450}
              height={450}
              className="hover:scale-[102%] duration-300 shadow-2xl object-cover rounded-3xl  "
            />
          </div>
        </div>

        <p className="font-bold text-lg  md:text-xl capitalize mt-6 ">
          {project.title}
        </p>
        <div className="flex justify-between mt-2">
          <p className="text-sm md:text-lg w-2/3  text-muted-foreground ">
            {project.description}
          </p>
          <p className="text-sm md:text-lg">{project.date}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
