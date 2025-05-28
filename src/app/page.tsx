import HeroSection from "@/components/hero-section";

import { Lenis } from "lenis/react";
import StaticsSection from "@/components/statics-section";
import { HeroHeader } from "@/components/hero-header";
import React from "react";

import AboutMeSection from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import SpecialitySection from "@/components/SpecialitySection";

// const options = { next: { revalidate: 30 } };
export default async function Home() {
  // const portfolio = await client.fetch<PortfolioContent[]>(
  //   PORTFOLIO_QUERY,
  //   {},
  //   options
  // );

  // console.log(portfolio);

  return (
    <Lenis root>
      <HeroHeader />
      <HeroSection />
      <StaticsSection />
      <AboutMeSection />
      <ProjectsSection />
      <SpecialitySection/>
      {/* <FeaturedProjectsSection />
      <TechStackSection />
      <StaticsSection />
      <WhatStandsMeOutSection /> */}
    </Lenis>
  );
}
