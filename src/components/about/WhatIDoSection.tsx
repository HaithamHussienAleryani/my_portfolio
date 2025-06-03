import React from "react";
import SectionMainHeader from "../SectionMainHeader";

import WhatIDoItem from "./WhatIDoItem";
import { TWhatIDo } from "@/data/types";

const whatIDoItems: TWhatIDo[] = [
  {
    title: "Web Development",
    description:
      "I build responsive and user-friendly websites using modern web technologies.",
    icon: "grid-2x2",
  },
  {
    title: "Mobile App Development",
    description: "I create cross-platform mobile applications with Flutter.",
    icon: "smartphone",
  },
  {
    title: "UI/UX Design",
    description: "I design intuitive and engaging user interfaces.",
    icon: "palette",
  },
  {
    title: "API Development",
    description: "I develop robust APIs for seamless data integration.",
    icon: "code",
  },
];

function WhatIDoSection() {
  return (
    <div className="main-container lg:!mt-30 lg:mb-40">
      <SectionMainHeader
        heading="What I Do"
        title="My Work Capabities"
        description="Some of the things i do when joinging teams"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {whatIDoItems.map((item, index) => (
          <WhatIDoItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WhatIDoSection;
