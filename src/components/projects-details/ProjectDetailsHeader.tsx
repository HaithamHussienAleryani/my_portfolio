import Link from "next/link";
import React from "react";
import PrimaryButton from "../PrimaryButton";

function ProjectDetailsHeader() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold font-work-sans">Mask Api</p>
        <div>
          <PrimaryButton
            title={"Check it out"}
            variant="outline"
            href="#"
            className="hidden md:flex"
          />
          <PrimaryButton
            title={"Check it out"}
            variant="ghost"
            href="#"
            className="flex md:hidden !font-bold"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
