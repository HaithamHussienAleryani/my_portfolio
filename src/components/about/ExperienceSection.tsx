import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import ExperienceItem from "./ExperienceItem";

type props = {
  title: string;

  subtitle: string;
  experiences: any[];
};

function ExperienceSection({ title, subtitle, experiences }: props) {
  return (
    <div className="main-container  flex flex-col lg:flex-row items-start justify-between my-20">
      <SectionMainHeader
        title={title}
        heading="Work History"
        description={subtitle}
      />
      <div className="flex   flex-col w-full mt-10 lg:w-1/2 gap-y-5">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
