import SectionMainHeader from "../SectionMainHeader";
import CertificateItem from "./CertificateItem";

type props = {
  title: string;

  subtitle: string;
  certificates: any[];
};

function CertificateSection({ certificates, title, subtitle }: props) {
  return (
    <div className="main-container  flex flex-col lg:flex-row items-start justify-between my-20">
      <SectionMainHeader
        title={title}
        heading="My Certificates"
        description={subtitle}
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
