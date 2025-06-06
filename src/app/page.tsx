import HeroSection from "@/components/hero-section";
import StaticsSection from "@/components/statics-section";
import React from "react";

import AboutMeSection from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import SpecialitySection from "@/components/SpecialitySection";
import TechStackSection from "@/components/tech-stack-section";
import ContactMeSection from "@/components/ContactMeSection";
import RightsReservedSection from "@/components/RightsReservedSection";

// const options = { next: { revalidate: 30 } };
export default async function Home() {
  // const portfolio = await client.fetch<PortfolioContent[]>(
  //   PORTFOLIO_QUERY,
  //   {},
  //   options
  // );

  // console.log(portfolio);

  return (
    <>
      <HeroSection />
      <StaticsSection />
      <AboutMeSection />
      <ProjectsSection />
      <SpecialitySection />
      <TechStackSection />
      <ContactMeSection />
    </>
  );
}
