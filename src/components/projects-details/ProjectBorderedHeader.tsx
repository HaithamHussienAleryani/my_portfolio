import React from "react";

function ProjectBorderedHeader({ header }: { header: string }) {
  return (
    <div className="border-b-1 ">
      <p className="text-2xl  mb-2 font-bold font-work-sans">{header}</p>
    </div>
  );
}

export default ProjectBorderedHeader;
