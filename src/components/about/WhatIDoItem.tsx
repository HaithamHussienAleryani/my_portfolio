import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

function WhatIDoItem({ item }: { item: any }) {
  return (
    <div className="p-6 bg-white dark:bg-OffBlack2 rounded-2xl border border-zinc-100">
      <div className="bg-primary/25  w-fit rounded-full p-3 ">
        <DynamicIcon className="text-primary" name={item.icon} />
      </div>
      <h3 className="text-xl font-semibold my-2">{item.title}</h3>
      <p>{item.subtitle}</p>
    </div>
  );
}

export default WhatIDoItem;
