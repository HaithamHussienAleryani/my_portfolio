import { cn, urlFor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const imageUrl =
    project.projectImage && project.projectImage.asset
      ? urlFor(project.projectImage)
      : "/images/placeholder.png";

  const formattedDate = project._createdAt
    ? new Date(project._createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Date N/A";

  return (
    <div className={cn(index % 2 !== 0 ? "sm:pt-14" : "pt-0")}>
      <Link href={"/projects/" + project._id} className="flex  flex-col">
        <div className="rounded-4xl">
          <div className="flex justify-center items-center">
            <Image
              src={imageUrl}
              alt={`${project.title} image`}
              width={600}
              height={600}
              className="hover:scale-[102%] duration-300 shadow-2xl object-cover rounded-3xl  "
            />
          </div>
        </div>

        <p className="font-bold text-lg  md:text-xl capitalize mt-6 ">
          {project.title}
        </p>
        <div className="flex justify-between mt-2">
          <p className="text-sm md:text-lg w-2/3  text-muted-foreground ">
            {project.short_description}
          </p>
          <p className="text-sm md:text-lg">{formattedDate}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
