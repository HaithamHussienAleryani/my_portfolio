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
  console.log(aboutMeContent);

  return (
    <section>
      <AboutHero
        header={aboutMeContent.header}
        subHeader={aboutMeContent.subheader}
        image={aboutMeContent.image}
        resume={aboutMeContent.resumeLink}
      />
      <TechStackSection className="!min-w-full mt-7" />
      <WhatIDoSection
        experiences={aboutMeContent.what_i_do_items}
        title={aboutMeContent.what_i_do_title}
        subtitle={aboutMeContent.what_i_do_subtitle}
      />
      <ExperienceSection />
      <CertificateSection />
      <ContactMeSection />
    </section>
  );
}

export default AboutPage;
