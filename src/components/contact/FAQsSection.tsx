import { client } from "@/sanity/client";
import { FAQS_QUERY } from "@/sanity/queries";
import { Accordion } from "@radix-ui/react-accordion";
import CustomAccordionItem from "../AreaExpertiseAccordionItem";
import SectionMainHeader from "../SectionMainHeader";

// revalidate every 1 hour
const options = { next: { revalidate: 3600 } };
async function FAQsSection() {
  const faqs = await client.fetch<any[]>(FAQS_QUERY, { options });

  return (
    <div className="flex flex-col md:flex-row mt-30 mb-20 ">
      <div className="w-full">
        <SectionMainHeader heading="faqs" title="Have questions?" />
      </div>
      <Accordion type="single" collapsible className=" space-y-5  w-full">
        {faqs.reverse().map((item, index) => (
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
