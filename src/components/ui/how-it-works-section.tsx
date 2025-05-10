import React from "react";
import GreenDotTitle from "./green-dot-title";
import WhyMeCard from "./why-me-card";

function WhatStandsMeOutSection() {
  return (
    <section className="how-it-works-section">
      <div className="max-w-7xl  mx-auto">
        <GreenDotTitle title={"03 - Choosing"} />
        <h1 className="text-8xl text-white lg:mb-20">Why Haitham</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 lg:px-14 xl:px-0">
          {Array.from({ length: 6 }, (_, index) => (
            <WhyMeCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatStandsMeOutSection;
