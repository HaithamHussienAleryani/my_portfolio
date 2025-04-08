import React from 'react';
import StackIcon from "tech-stack-icons"; // You can also use any another import name


const gray = true;
    
const teschstack = [
    "reactjs",
    "nextjs2",
    "typescript",
    "tailwindcss",
    "figma",
    "nodejs",
    "mongodb",
    "prisma",
    "graphql",
    "redux",
    "vitejs",
    "sass",
    "jest",
    "cypress",
    "storybook",
    "webpack",
    "babel",
    "eslint",
    "prettier",
    "git",
    "github",
    "gitlab",
    "bitbucket",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "gcloud",
    "firebase",
    "netlify",
    "heroku",
    "digitalocean",
    "cloudflare",
    "linux",
    "apache",
    "mysql",
    "postgresql",
    "redis",
    "elastic",
    "kibana",

];


const TechStackSection = () => {
 
    return (
      <div
        className={
          "md:max-w-6xl md:mx-auto pt-10 md:pt-60 overflow-hidden mb-6"
        }
      >
        <div
          className={
            "flex justify-start px-6 md:px-0 pt-4 gap-x-2 items-center pb-3 lg:pb-6"
          }
        >
          <div
            className={
              "size-3 rounded-full shadow-[0px_2px_13px_0px_rgba(130,255,31,0.5)] bg-primary"
            }
          ></div>
          <p
            className={"text-muted-foreground text-sm md:text-md font-semibold"}
          >
            {" "}
            02 - TechStack & Tools
          </p>
        </div>
        <h1
          className={
            " text-4xl md:text-8xl px-6 md:px-0   md:font-thin max-w-4xl"
          }
        >
          My creative toolbox
        </h1>
        <div>
                <div className="flex flex-wrap gap-10 mt-12 ">
                    {
                        teschstack.map((icon) => (
                            <StackIcon
                                key={icon}
                                name={icon}
                                grayscale={gray}
                                className="tech-stack-icon"
                            />
                        ))

                    }
          
          </div>
        </div>
      </div>
    );
};

export default TechStackSection;
