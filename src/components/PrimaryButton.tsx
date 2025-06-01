"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function PrimaryButton({
  title,
  className,
  href = "#",
}: {
  title: string;
  className?: string;
  href?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "backInOut" }}
    >
      <Button
        asChild
        className={cn(
          "h-10 group/arrow bg-black dark:bg-white    px-3 hover:px-5 transition-all duration-500 rounded-full ",
          className
        )}
      >
        <Link href={href}>
          <span className="pt-1 mx-3">{title}</span>
          {/* <div
            className={
              "bg-background text-black dark:text-white rounded-full p-2 group-hover/arrow:translate-x-2 transition-all duration-500 "
            }
          >
            <ArrowUpRight
              className={
                "size-6  group-hover/arrow:rotate-[135deg] transition-all ease-in-out duration-300"
              }
            />
          </div> */}
        </Link>
      </Button>
    </motion.div>
  );
}

export default PrimaryButton;
