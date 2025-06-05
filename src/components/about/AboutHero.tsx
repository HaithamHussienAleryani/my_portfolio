import Image from "next/image";
import MeImage from "../../../public/me.jpg";
import PrimaryButton from "@/components/PrimaryButton";
import CircleText from "@/components/motion-primitives/circle-text";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function AboutHero() {
  return (
    <div className="main-container  mt-20 lg:mt-30">
      <div className="flex flex-col md:flex-row mx-auto justify-center md:px-10 space-y-8 md:space-x-14 ">
        <div className="relative">
          <Image
            src={MeImage}
            alt="Haitham Image"
            className="rounded-full mx-auto w-[300px]  md:w-full  object-cover "
          />
          <Link
            href={"/contact"}
            className="absolute   end-10 md:end-0 bottom-0.5 flex   flex-col items-center justify-center"
          >
            <CircleText
              spinDuration={5}
              text={" Lets Talk . Lets Talk . Lets Talk "}
              className=" bg-white  shadow-xl inset-shadow-xl "
            />
            <div className="absolute hid rounded-full border dark:border-zinc-300 p-4">
              <ArrowUpRight className=" size-4 md:size-6  text-muted-foreground" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center   gap-4">
          <p className="text-4xl lg:text-7xl font-bold font-work-sans ">
            A creative <span className="text-primary">React & Nextjs</span>{" "}
            developer
          </p>
          <span className="  lg:w-2/3 ">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </span>
          <PrimaryButton title="My Resume" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
