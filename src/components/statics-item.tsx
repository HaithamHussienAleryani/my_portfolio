import React from "react";

const StaticsItem = ({
  staticDesc,
}: {
  staticRate: string;
  staticDesc: string;
}) => {
  return (
    <p className="flex flex-col items-center justify-center text-white-gray text-2xl md:text-4xl capitalize font-bold ">
      {staticDesc}
    </p>
  );
};

export default StaticsItem;
