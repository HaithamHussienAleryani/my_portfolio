import HeroSection from "@/components/hero-section";

import { Lenis } from "lenis/react";
import StaticsSection from "@/components/statics-section";
import { HeroHeader } from "@/components/hero-header";
import React from "react";
import FeaturedProjectsSection from "@/components/featured-projects-section";
import TechStackSection from "@/components/tech-stack-section";
import WhatStandsMeOutSection from "@/components/ui/how-it-works-section";

//const options = { next: { revalidate: 30 } };
export default async function Home() {
//   const portfolio = await client.fetch<PortfolioContent[]>(
//     PORTFOLIO_QUERY,
//     {},
//     options
//   );

//   console.log(portfolio);

  return (
    <Lenis root>
      <HeroHeader />
      <HeroSection />
      <StaticsSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <StaticsSection />
      <WhatStandsMeOutSection />
    </Lenis>
  );
}
