"use client";
import React from "react";

import { Accordion } from "@/components/ui/accordion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CustomAccordionItem from "./AreaExpertiseAccordionItem";
import SectionMainHeader from "./SectionMainHeader";

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
    <section className="main-container mt-20">
      <SectionMainHeader title="Area of Expertise" heading="Speciality" />

      <div className="grid grid-cols-1 lg:grid-cols-2"></div>
    </section>
  );
}

export default SpecialitySection;
