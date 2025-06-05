import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { Accordion } from "@radix-ui/react-accordion";
import CustomAccordionItem from "../AreaExpertiseAccordionItem";
const faqsItems = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it responsive?",
    content: "Yes. It works on all screen sizes.",
  },
];
function FAQsSection() {
  return (
    <div className="flex flex-col md:flex-row mt-30 mb-20 ">
      <div className="w-full">
        <SectionMainHeader heading="faqs" title="Have questions?" />
      </div>
      <Accordion type="single" collapsible className=" space-y-5  w-full">
        {faqsItems.map((item, index) => (
          <CustomAccordionItem
            key={index}
            index={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default FAQsSection;
