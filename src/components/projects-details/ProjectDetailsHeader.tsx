import React from "react";
import PrimaryButton from "../PrimaryButton";
import { TechStackIcons } from "@/constants/icons";

type props = {
  title: string;
  description: string;
  liveDemoLink: string;
  githubLink?: string;
};

function ProjectDetailsHeader({
  title,
  description,
  githubLink,
  liveDemoLink,
}: props) {
  return (
    <div className="mt-10">
      <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between">
        <p className="text-4xl font-bold font-work-sans">{title}</p>
        <div className="flex items-center space-x-4 ">
          <PrimaryButton
            icon={TechStackIcons.REACT}
            title={"Visit website"}
            variant="outline"
            href={liveDemoLink}
          />
          {githubLink && (
            <PrimaryButton
              title={"Source code"}
              icon={TechStackIcons.GithubIcon}
              invertIcon
              variant="outline"
              href="#"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5  items-start gap-6  md:gap-14 ">
        <p className="md:w-2/3">{description}</p>
        <div className="space-y-1">
          <p>
            <span className="font-bold me-2">Roles:</span> App Developer.
          </p>
          <p>
            <span className="font-bold me-2">Client:</span> Personal Project.
          </p>
        </div>
      </div>
      <div className="flex mt-4 flex-wrap gap-2">
        {/* {TechStackIcons.getIcons(8).map((item, index) => (
          <TechStackItem
            hideImage
            key={index}
            icon={item.icon}
            name={item.name}
          />
        ))} */}
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
