import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

function AreaExpertiseAccordionItem(props: { index: number; title: string; content: string }) {
    const { index, title, content } = props;
  return (
    <AccordionItem
      value={`item-${index}`}
      className=" bg-white !cursor-pointer border-accent dark:border-muted dark:bg-OffBlack2 border-1  rounded-xl px-3"
    >
      <AccordionTrigger className="hover:no-underline bg-OffBlack2 !cursor-pointer  rounded-xl px-3">
        {title}
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
}

export default AreaExpertiseAccordionItem