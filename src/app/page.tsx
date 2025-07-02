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
import InfoSection from "@/components/InfoSection";

//const options = { next: { revalidate: 30 } };
export default async function Home() {
  const portfolio = await client.fetch<PortfolioContent[]>(PORTFOLIO_QUERY, {});

  const portfolioData = portfolio[0];

  //console.log(portfolioData);

  return (
    <>
      <HeroSection content={portfolioData} />
      <StaticsSection items={portfolioData.hero_slider} />
      <AboutMeSection
        title={portfolioData.about_title}
        description={portfolioData.about_subtitle}
      />
      <InfoSection />
      <ProjectsSection projects={portfolioData.projects} />
      <SpecialitySection />
      <TechStackSection />
      <ContactMeSection />
    </>
  );
}
