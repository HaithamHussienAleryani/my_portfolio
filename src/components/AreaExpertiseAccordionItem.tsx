import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function CustomAccordionItem(props: {
  index: number;
  title: string;
  content: string;
}) {
  const { index, title, content } = props;
  return (
    <AccordionItem
      value={`item-${index}`}
      className=" bg-white !cursor-pointer border-accent dark:border-muted shadow-neutral-100 dark:bg-OffBlack2 shadow-lg border-0 rounded-xl px-3"
    >
      <AccordionTrigger className="hover:no-underline font-bold bg-OffBlack2 !cursor-pointer  rounded-xl px-3">
        {title}
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
}

export default CustomAccordionItem;
