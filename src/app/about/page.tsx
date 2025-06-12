import AboutHero from "@/components/about/AboutHero";

import TechStackSection from "@/components/tech-stack-section";

import ContactMeSection from "@/components/ContactMeSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import WhatIDoSection from "@/components/about/WhatIDoSection";
import CertificateSection from "@/components/about/CertificateSection";
import { client } from "@/sanity/client";
import { CONTACT_ME_QUERY } from "@/sanity/queries";

async function AboutPage() {
  const aboutMeContent = await client.fetch(CONTACT_ME_QUERY);

  return (
    <section>
      <AboutHero
        header={aboutMeContent.header}
        subHeader={aboutMeContent.subheader}
        image={aboutMeContent.image}
        resume={aboutMeContent.resumeLink}
      />
      <TechStackSection className="!min-w-full mt-7" />
      <WhatIDoSection />
      <ExperienceSection />
      <CertificateSection />
      <ContactMeSection />
    </section>
  );
}

export default AboutPage;
