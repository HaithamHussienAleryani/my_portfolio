import Image from "next/image";
import MeImage from "../../../public/me.jpg"; 
import PrimaryButton from "@/components/PrimaryButton";


function AboutPage() {
  return (
    <section className="main-container mt-30">
      <div className="flex justify-center space-x-14 ">
        <Image
          src={MeImage}
          alt="Haitham Image"
          height={350}
          width={350}
          className="rounded-b-full object-cover h-[450px]"
        />
        <div className="flex flex-col justify-center   gap-4">
          <p className="text-4xl lg:text-7xl font-work-sans ">
            A creative <span className="text-primary">React & Nextjs</span> developer
          </p>
          <span className="w-2/3 text-muted-foreground">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </span>
          <PrimaryButton title="My Resume" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
