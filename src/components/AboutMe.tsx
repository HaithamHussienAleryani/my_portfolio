import React from "react";
import Paragraph from "./animations/AnimatedCharactar";

function AboutMeSection() {
  return (
    <main className="my-24 text-center">
      <p className="text-primary">ABOUT ME</p>
      <Paragraph
        paragraph=" I Haithm Hussien, with over 5 years of experience in Mobile App
        Development and a passion for creating innovative solutions, am
        dedicated to delivering high-quality applications that enhance user
        experiences."
      />
    </main>
  );
}

export default AboutMeSection;
