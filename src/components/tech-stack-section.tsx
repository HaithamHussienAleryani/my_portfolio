import React from "react";
import StackIcon from "tech-stack-icons"; // You can also use any another import name

const techStack = [
  "reactjs",
  "nextjs2",
  "typescript",
  "tailwindcss",
  "nodejs",
  "mongodb",
  "prisma",
  "sass",
  "jest",
  "git",
  "github",
  "gitlab",
  "bitbucket",
  "docker",
  "aws",
  "azure",
  "gcloud",
  "firebase",
  "netlify",
  "mysql",
  "postgresql",
];

const TechStackSection = () => {
  return (
    <div className={" max-w-7xl mx-auto  py-10  lg:py-30 overflow-hidden "}>
      <div
        className={
          "flex justify-start px-6 lg:px-14 xl:px-0 lg:pt-4 gap-x-2 items-center pb-3 lg:pb-6"
        }
      >
        <div
          className={
            "size-3  rounded-full shadow-[0px_2px_13px_0px_rgba(130,255,31,0.5)] bg-primary"
          }
        ></div>
        <p className={"text-muted-foreground text-sm md:text-md font-semibold"}>
          02 - TechStack & Tools
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex-col justify-between">
        <h1
          className={
            " text-4xl md:text-8xl lg:px-14 px-6 xl:px-0    text-OffBlack   "
          }
        >
          My creative <span className="font-thin">toolbox</span>
        </h1>

        <div className="grid grid-cols-6 px-6 place-items-center   lg:grid-cols-7 gap-8  lg:gap-12 lg:px-10 mt-12 ">
          {techStack.map((icon) => (
            <StackIcon
              key={icon}
              name={icon}
              grayscale={false}
              className="tech-stack-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
