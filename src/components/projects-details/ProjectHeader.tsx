import { ArrowLeft, ArrowLeftFromLine, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function ProjectHeader({ date }: { date: string }) {
  return (
    <div className="flex  justify-between items-center">
      <Link href="/projects" className="flex space-x-2 items-center">
        <ArrowLeft className="size-4" />
        <span className="text-sm">Back to Projects</span>
      </Link>
      <div className="border border-neutral-300 dark:border-neutral-600 p-1 px-2 rounded-lg">
        <span className="text-sm dark:text-neutral-400">{date}</span>
      </div>
    </div>
  );
}

export default ProjectHeader;
