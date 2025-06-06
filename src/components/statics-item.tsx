import React from "react";

const StaticsItem = ({
  staticDesc,
}: {
  staticRate: string;
  staticDesc: string;
}) => {
  return (
    <p className="flex flex-col items-center font-work-sans justify-center dark:text-muted-foreground text-white-gray text-xl md:text-2xl lg:text-3xl capitalize font-semibold tracking-wide">
      {staticDesc}
    </p>
  );
};

export default StaticsItem;
