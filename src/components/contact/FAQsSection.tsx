import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { Accordion } from "@radix-ui/react-accordion";
import CustomAccordionItem from "../AreaExpertiseAccordionItem";
import { client } from "@/sanity/client";
import { FAQS_QUERY } from "@/sanity/queries";

async function FAQsSection() {
  const faqs = await client.fetch<any[]>(FAQS_QUERY, {});
  return (
    <div className="flex flex-col md:flex-row mt-30 mb-20 ">
      <div className="w-full">
        <SectionMainHeader heading="faqs" title="Have questions?" />
      </div>
      <Accordion type="single" collapsible className=" space-y-5  w-full">
        {faqs.map((item, index) => (
          <CustomAccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default FAQsSection;
