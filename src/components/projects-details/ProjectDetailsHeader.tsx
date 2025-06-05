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
      <div className="flex flex-col md:flex-row mt-5  items-start gap-2  md:gap-14 ">
        <p className="md:w-2/3">
          The Video Sharing App is an engaging platform that empowers users to
          connect through video content. It allows users to seamlessly upload,
          view, and share videos with others in the app's community, fostering
          creativity and interaction.
        </p>
        <div className=" space-y-1">
          <p>
            <span className="font-bold me-2">Roles:</span> App Developer.
          </p>
          <p>
            <span className="font-bold me-2">Client:</span> Personal Project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
