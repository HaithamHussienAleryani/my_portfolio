import React from "react";

import SectionMainHeader from "./SectionMainHeader";
import MyExpertiseCard from "./MyExpertiseCard";
import { TechStackIcons } from "@/constants/icons";

function SpecialitySection() {
  return (
    <section className="main-container mt-20">
      <SectionMainHeader title="Area of Expertise" heading="Speciality" />

      <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10">
        <MyExpertiseCard
          logo={TechStackIcons.REACT}
          tag="Front end developer"
          title="React Enthusiast"
          description="I saw in React that everything is possible with its component-based architecture and vast ecosystem, enabling me to build complex UIs with ease."
        />
        <MyExpertiseCard
          logo={TechStackIcons.NextJsIcon}
          tag="Front end developer"
          invertBg
          title="Next.js developer"
          description="I embrace Next.js for its production-ready features like SSR and SSG, allowing me to build fast, scalable, and SEO-optimized React applications with confidence."
        />
      </div>
    </section>
  );
}

export default SpecialitySection;
