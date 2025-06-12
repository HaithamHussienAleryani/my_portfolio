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
      <WhatIDoSection
        experiences={aboutMeContent.what_i_do_items}
        title={aboutMeContent.what_i_do_title}
        subtitle={aboutMeContent.what_i_do_subtitle}
      />
      <ExperienceSection
        experiences={aboutMeContent.experiences_list}
        title={aboutMeContent.experience_title}
        subtitle={aboutMeContent.experience_subtitle}
      />
      <CertificateSection
        title={aboutMeContent.certificates_title}
        subtitle={aboutMeContent.certificates_subtitle}
        certificates={aboutMeContent.certificates_list}
      />
      <ContactMeSection />
    </section>
  );
}

export default AboutPage;
