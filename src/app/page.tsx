import HeroSection from "@/components/hero-section";
import StaticsSection from "@/components/statics-section";
import AboutMeSection from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import SpecialitySection from "@/components/SpecialitySection";
import TechStackSection from "@/components/tech-stack-section";
import ContactMeSection from "@/components/ContactMeSection";
import { PortfolioContent } from "@/data/portfolioContent";
import { client } from "@/sanity/client";
import { PORTFOLIO_QUERY } from "@/sanity/queries";

//const options = { next: { revalidate: 30 } };
export default async function Home() {
  const portfolio = await client.fetch<PortfolioContent[]>(PORTFOLIO_QUERY, {});

  const herodata = portfolio[0];

  console.log(herodata);

  return (
    <>
      <HeroSection content={herodata} />
      <StaticsSection items={herodata.hero_slider} />
      <AboutMeSection
        title={herodata.about_title}
        description={herodata.about_subtitle}
      />
      <ProjectsSection />
      <SpecialitySection />
      <TechStackSection />
      <ContactMeSection />
    </>
  );
}
