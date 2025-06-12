import React from "react";
import { ContactForm } from "./ContactForm";
import ContactMeCard from "./ContactMeCard";

function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row mt-10  gap-10">
      <ContactForm />
      <ContactMeCard />
    </section>
  );
}

export default ContactSection;
