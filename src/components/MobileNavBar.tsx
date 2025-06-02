"use client";

import { menuItems } from "@/data/constants";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MobileNavBar() {
  const pathname = usePathname();
  return (
    <div className=" text-xs z-50 fixed bottom-0 w-full md:hidden bg-white/85 backdrop-blur-2xl dark:bg-background pt-2 rounded-t-3xl">
      <ul className="flex justify-around items-center mx-5 py-3">
        {menuItems.map((item, index) => (
          <li key={index} className={""}>
            <Link
              href={item.href}
              className={cn(
                "text-foreground group/nav-item flex flex-col items-center  gap-2 group-hover/nav-item:text-primary   duration-150",
                pathname === item.href && "text-primary"
              )}
            >
              <DynamicIcon className="size-5 text" name={item.icon} />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavBar;
