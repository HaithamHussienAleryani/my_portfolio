import HeroSection from "@/components/hero-section";
import {client} from "@/sanity/lib/client";
import {SanityDocument} from "next-sanity";
import {PORTFOLIO_QUERY} from "@/sanity/queries";


const options = {next:{revalidate:30}};
export default async function Home() {

  const portfolio = await client.fetch<SanityDocument[]>(PORTFOLIO_QUERY,{},options);

  console.log(portfolio);


  return (
    <div>
    <HeroSection />
    </div>
  );
}
