import AboutHero from "@/components/about/AboutHero";

import TechStackSection from "@/components/tech-stack-section";

import ContactMeSection from "@/components/ContactMeSection";
import RightsReservedSection from "@/components/RightsReservedSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import WhatIDoSection from "@/components/about/WhatIDoSection";
import CertificateSection from "@/components/about/CertificateSection";

function AboutPage() {
  return (
    <section>
      <AboutHero />
      <TechStackSection className="!min-w-full mt-7" />
      <WhatIDoSection />
      <ExperienceSection />
      <CertificateSection />
      <ContactMeSection />
    </section>
  );
}

export default AboutPage;
