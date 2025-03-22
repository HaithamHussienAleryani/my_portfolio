import HeroSection from "@/components/hero-section";
import {client} from "@/sanity/lib/client";
import {PORTFOLIO_QUERY} from "@/sanity/queries";
import {PortfolioContent} from "@/data/portfolioContent";
import {Lenis} from "lenis/react";


const options = {next:{revalidate:30}};
export default async function Home() {

  const portfolio = await client.fetch<PortfolioContent[]>(PORTFOLIO_QUERY,{},options);

  console.log(portfolio);


  return (
      <Lenis root>
    <div>
    <HeroSection />
    </div>
      </Lenis>
  );
}
