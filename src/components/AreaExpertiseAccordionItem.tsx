import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function CustomAccordionItem(props: {
  index: number;
  question: string;
  answer: string;
}) {
  const { index, question, answer } = props;
  return (
    <AccordionItem
      value={`item-${index}`}
      className=" bg-white !cursor-pointer border-accent dark:border-muted shadow-neutral-100 dark:shadow-none dark:bg-OffBlack2 shadow-lg border-0 rounded-xl p-3"
    >
      <AccordionTrigger className="hover:no-underline font-bold bg-OffBlack2 !cursor-pointer  rounded-xl px-3">
        {question}
      </AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  );
}

export default CustomAccordionItem;
