import { menuItems } from "@/data/constants";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import React from "react";

function MobileNavBar() {
  return (
    <div className=" text-xs z-50 fixed bottom-0 w-full md:hidden bg-white/85 backdrop-blur-2xl dark:bg-background pt-2 rounded-t-3xl">
      <ul className="flex justify-around items-center mx-5 py-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={"group/nav-item flex flex-col items-center  gap-2"}
          >
            <DynamicIcon className="size-5 text" name={item.icon} />
            <Link
              href={item.href}
              className="text-foreground group-hover/nav-item:text-primary  block duration-150"
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavBar;
