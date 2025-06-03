import React from "react";
import SectionHeader from "./SectionHeader";

function SectionMainHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description?: string;
}) {
  return (
    <div>
      <SectionHeader header={heading} />
      <h1 className="font-work-sans font-bold text-[2rem] md:text-5xl md:mt-3 mb-1 md:mb-4">
        {title}
      </h1>
      {description && <p className="md:w-[400px]">{description}</p>}
    </div>
  );
}

export default SectionMainHeader;
