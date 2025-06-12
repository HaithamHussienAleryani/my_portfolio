import ContactSection from "@/components/contact/ContactSection";
import FAQsSection from "@/components/contact/FAQsSection";

import SectionMainHeader from "@/components/SectionMainHeader";
import React from "react";

function ContactPage() {
  return (
    <section className="mt-30 md:mt-40 main-container">
      <SectionMainHeader
        heading="Connect with me"
        title="Let's start a project together"
      />
      <ContactSection />
      <FAQsSection />
    </section>
  );
}

export default ContactPage;
