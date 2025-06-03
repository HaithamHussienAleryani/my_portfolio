import { TCertificate } from "@/data/types";
import SectionMainHeader from "../SectionMainHeader";
import CertificateItem from "./CertificateItem";

const certificates: TCertificate[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    date: "Graduated: May 2020",
    url: "https://example.com/certificate1",
  },
];

function CertificateSection() {
  return (
    <div className="main-container  flex flex-col lg:flex-row items-start justify-between my-20">
      <SectionMainHeader
        title="Learning Journey"
        heading="My Certificates"
        description="I have completed various courses and certifications to enhance my skills and knowledge in the field of technology."
      />
      <div className="flex   flex-col w-full mt-10 lg:w-1/2 gap-y-5">
        {certificates.map((cert, index) => (
          <CertificateItem key={index} item={cert} />
        ))}
      </div>
    </div>
  );
}

export default CertificateSection;
