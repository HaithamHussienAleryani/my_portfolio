import React from "react";
type Props = {
  title: string;
};
export default function GreenDotTitle({ title }: Props) {
  return (
    <div
      className={
        "flex justify-start px-6 md:px-0 pt-4 gap-x-2 items-center pb-3 lg:pb-6"
      }
    >
      <div
        className={
          "size-3 rounded-full shadow-[0px_2px_13px_0px_rgba(130,255,31,0.5)] bg-primary"
        }
      ></div>
      <p className={"text-muted-foreground text-sm md:text-md font-semibold"}>
        {title}
      </p>
    </div>
  );
}
