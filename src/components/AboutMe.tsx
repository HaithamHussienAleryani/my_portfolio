import React from "react";
import Paragraph from "./animations/AnimatedCharactar";
import SectionHeader from "./SectionHeader";

function AboutMeSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="my-24">
      <SectionHeader header={title} className="justify-center" />
      <Paragraph paragraph={description} />
    </main>
  );
}

export default AboutMeSection;
