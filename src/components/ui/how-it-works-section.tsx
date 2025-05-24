import React from "react";
import GreenDotTitle from "./green-dot-title";
import WhyMeCard from "./why-me-card";
import { WhyMeInfo } from "@/data/types";
import { Sparkle } from "lucide-react";

const whatStandsMeOutData: WhyMeInfo[] = [
  {
    title: "87+",
    description: "Projects",
    icon: (
      <Sparkle className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
    ),
    color: "text-primary",
    backgroundColor: "bg-primary",
    iconColor: "text-primary",
  },
  {
    title: "87+",
    description: "Projects",
    icon: (
      <Sparkle className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
    ),
    color: "text-primary",
    backgroundColor: "bg-primary",
    iconColor: "text-primary",
  },
  {
    title: "87+",
    description: "Projects",
    icon: (
      <Sparkle className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
    ),
    color: "text-primary",
    backgroundColor: "bg-primary",
    iconColor: "text-primary",
  },
  {
    title: "87+",
    description: "Projects",
    icon: (
      <Sparkle className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
    ),
    color: "text-primary",
    backgroundColor: "bg-primary",
    iconColor: "text-primary",
  },
  {
    title: "87+",
    description: "Projects",
    icon: (
      <Sparkle className=" size-50 absolute opacity-10 top-10 left-1/2 transform -translate-x-1/2 " />
    ),
    color: "text-primary",
    backgroundColor: "bg-primary",
    iconColor: "text-primary",
  },
];

function WhatStandsMeOutSection() {
  return (
    <section className="how-it-works-section">
      <div className="max-w-7xl  mx-auto">
        <GreenDotTitle title={"03 - Choosing"} />
        <h1 className="text-8xl text-white lg:mb-20">Why Haitham</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 lg:px-14 xl:px-0">
          {whatStandsMeOutData.map((item, index) => (
            <WhyMeCard key={index} whyMeInfo={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatStandsMeOutSection;
