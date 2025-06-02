import { TProject } from "@/data/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project, index }: { project: TProject; index: number }) {
  return (
    <div className={cn(index % 2 !== 0 ? "md:pt-14" : "pt-0")}>
      <Link href={project.link} className="flex  flex-col">
        <div
          style={{ backgroundColor: project.bgColor }}
          className="rounded-4xl  "
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} image`}
            width={400}
            height={250}
            className=" w-[95%] h-[95%] mx-auto my-[3%] md:w-[450px] hover:scale-[102%] duration-300 shadow-2xl md:h-[300px]  object-cover rounded-3xl md:my-10 "
          />
        </div>

        <p className="font-bold text-lg  md:text-xl capitalize mt-6 ">{project.title}</p>
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
