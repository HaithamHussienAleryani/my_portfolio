import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import ExperienceItem from "./ExperienceItem";
import { TExperience } from "@/data/types";
const experiences: TExperience[] = [
  {
    company: "Waslafaq",
    image: "/me.jpg",
    title: "Front-end Developer",
    date: "June 24 - Present",
  },
  {
    company: "TechCorp",
    image: "/me.jpg",
    title: "Software Engineer",
    date: "Jan 20 - May 24",
  },
];
function ExperienceSection() {
  return (
    <div className="main-container  flex flex-col lg:flex-row items-start justify-between my-20">
      <SectionMainHeader
        title="Experience"
        heading="Work History"
        description="I have worked with some of the most innovative industry leaders to help
        build their top-notch products."
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
