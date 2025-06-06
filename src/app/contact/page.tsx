import { ContactForm } from "@/components/contact/ContactForm";
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
      <ContactForm />
      <FAQsSection />
    </section>
  );
}

export default ContactPage;
