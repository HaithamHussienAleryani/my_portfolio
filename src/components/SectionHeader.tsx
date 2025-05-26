import { cn } from "@/lib/utils";

import React from "react";
import StarIcon from "./StarIcon";

function SectionHeader({
  className,
  header,
}: {
  className?: string;
  header: string;
}) {
  return (
    <div className={cn("flex  items-center space-x-2", className)}>
      <StarIcon className="size-5" />
      <p className="text-primary">{header}</p>
    </div>
  );
}

export default SectionHeader;
