import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function PrimaryButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-14 group/arrow bg-black dark:bg-white    px-3 hover:px-5 transition-all duration-500 rounded-full text-base",
        className
      )}
    >
      <Link href="#">
        <span className="pt-1 mx-3">{title}</span>
        <div
          className={
            "bg-background text-black dark:text-white rounded-full p-2 group-hover/arrow:translate-x-2 transition-all duration-500 "
          }
        >
          <ArrowUpRight
            className={
              "size-6  group-hover/arrow:rotate-[135deg] transition-all ease-in-out duration-300"
            }
          />
        </div>
      </Link>
    </Button>
  );
}

export default PrimaryButton;
