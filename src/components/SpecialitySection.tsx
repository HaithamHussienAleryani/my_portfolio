import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function SpecialitySection() {
  return (
    <section className="mt-5 main-conainer max-w-sm  md:max-w-lg lg:max-w-6xl mx-auto">
      <SectionHeader header="Speciality" />
      <h1 className="font-work-sans tracking-wider font-bold text-5xl mt-5 mb-3 ">
        Area of Expertise
      </h1>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default SpecialitySection;
