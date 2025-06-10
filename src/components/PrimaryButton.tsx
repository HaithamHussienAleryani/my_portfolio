"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

type props = {
  title: string;
  className?: string;
  href?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  icon?: string;
  invertIcon?: boolean;
};

function PrimaryButton({
  title,
  className,
  href = "#",
  variant = "default",
  icon,
  invertIcon = false,
}: props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "backInOut" }}
    >
      <Button
        asChild
        size={"lg"}
        variant={variant}
        className={cn(
          "px-3 hover:px-5 w-fit hover:bg-primary dark:hover:bg-primary transition-all duration-500 rounded-full",
          className
        )}
      >
        <Link href={href}>
          {icon && (
            <Image
              src={icon}
              alt={`${title} button`}
              className={cn("size-5", invertIcon && "dark:invert-100")}
            />
          )}
          <span className="px-1 text-sm md:text-md">{title}</span>
        </Link>
      </Button>
    </motion.div>
  );
}

export default PrimaryButton;
