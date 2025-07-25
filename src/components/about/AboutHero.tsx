import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import CircleText from "@/components/motion-primitives/circle-text";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/utils";
import AnimatedText from "../animations/AnimatedText";
type props = {
  header: string;
  subHeader: string;
  image: any;
  resume: string;
};

function AboutHero({ header, subHeader, image, resume }: props) {
  const imageUrl = urlFor(image);

  return (
    <div className="main-container  mt-20 lg:mt-30">
      <div className="flex flex-col md:flex-row mx-auto justify-center md:px-10 space-y-8 md:space-x-14 ">
        <div className="relative">
          <Image
            src={imageUrl}
            width={800}
            height={800}
            alt="Haitham Image"
            className="rounded-full mx-auto   object-cover "
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
          <AnimatedText
            text={header}
            hasColor={true}
            duration={1.5}
            stagger={0.1}
            from={2}
            to={5}
            className="text-4xl lg:text-7xl font-bold font-work-sans "
          />

          <AnimatedText
            duration={0.2}
            stagger={0.05}
            className="  lg:w-2/3 "
            text={subHeader}
          />
          <PrimaryButton href={resume} title="My Resume" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
