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
          title="React developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error totam ex eius. Voluptas qui beatae quasi possimus repellat nemo laboriosam porro nesciunt veniam? Provident libero temporibus eveniet velit eos, iste amet at?"
        />
        <MyExpertiseCard
          logo={TechStackIcons.NextJsIcon}
          tag="Full stack developer"
          invertBg
          title="NextJs developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nemo laboriosam ipsa vero repudiandae, quo et similique placeat aliquid cumque ea recusandae pariatur quis."
        />
      </div>
    </section>
  );
}

export default SpecialitySection;
