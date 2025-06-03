import AboutHero from "@/components/about/AboutHero";
import ExperienceItem from "@/components/about/ExperienceItem";
import SectionHeader from "@/components/SectionHeader";
import TechStackSection from "@/components/tech-stack-section";
import MeImage from "../../../public/me.jpg";
import { TExperience } from "@/data/types";
import SectionMainHeader from "@/components/SectionMainHeader";

const experiences: TExperience[] = [
  {
    company: "Waslafaq",
    image: "/me.jpg",
    title: "Front-end Developer",
    date: "June 24 - Present",
  },
  {
    company: "TechCorp",
    image: "/me.jpg",
    title: "Software Engineer",
    date: "Jan 20 - May 24",
  },
];

function AboutPage() {
  return (
    <section>
      <AboutHero />
      <TechStackSection className="!min-w-full mt-7" />
      <div className="main-container  flex flex-col lg:flex-row items-start justify-start my-20">
        <SectionMainHeader
          title="Experience"
          heading="Work History"
          description="I have worked with some of the most innovative industry leaders to help
        build their top-notch products."
        />
        <div className="flex   flex-col w-full mt-10 lg:flex-1/2 gap-y-5">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
