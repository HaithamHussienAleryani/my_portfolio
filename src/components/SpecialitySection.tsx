"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { Accordion } from "@/components/ui/accordion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AreaExpertiseAccordionItem from "./AreaExpertiseAccordionItem";

const expertiseItems = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it responsive?",
    content: "Yes. It works on all screen sizes.",
  },
  {
    title: "Is it customizable?",
    content: "Yes. You can easily customize it to fit your needs.",
  },
];

function SpecialitySection() {
  return (
    <section className="mt-5 main-conainer max-w-sm  md:max-w-lg lg:max-w-6xl mx-auto">
      <SectionHeader header="Speciality" />
      <h1 className="font-work-sans tracking-wider font-bold text-5xl mt-5 mb-3 ">
        Area of Expertise
      </h1>

      <div className="flex flex-col md:flex-row  mt-10">
        <Accordion
          type="single"
          collapsible
          className="  space-y-4 border-0  h-fit w-full  py-3"
        >
          {expertiseItems.map((item, index) => (
            <AreaExpertiseAccordionItem
              key={index}
              index={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </Accordion>

        <DotLottieReact
          src="https://lottie.host/dd1dadf1-3390-4efc-9dca-d99f2306ba28/soa3WoCUGz.lottie"
          loop
          className=" hidden md:flex h-full md:-translate-y-10  w-full  "
          autoplay
        />
      </div>
    </section>
  );
}

export default SpecialitySection;
