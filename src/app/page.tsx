import HeroSection from "@/components/hero-section";
import {client} from "@/sanity/lib/client";
import {PORTFOLIO_QUERY} from "@/sanity/queries";
import {PortfolioContent} from "@/data/portfolioContent";
import {Lenis} from "lenis/react";
import StaticsSection from "@/components/statics-section";
import {HeroHeader} from "@/components/hero-header";
import React from "react";
import FeaturedProjectsSection from "@/components/featured-projects-section";
import TechStackSection from "@/components/tech-stack-section";


const options = {next: {revalidate: 30}};
export default async function Home() {

    const portfolio = await client.fetch<PortfolioContent[]>(PORTFOLIO_QUERY, {}, options);

    console.log(portfolio);


    return (
        <Lenis root>
            <HeroHeader/>
            <HeroSection/>
            <StaticsSection/>
            <FeaturedProjectsSection/>
            <TechStackSection/>
        </Lenis>
    );
}
