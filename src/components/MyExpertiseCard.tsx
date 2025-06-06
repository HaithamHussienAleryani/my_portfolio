import { cn } from "@/lib/utils";
import { CodeIcon } from "lucide-react";
import Image from "next/image";
type props = {
  logo: string;
  tag: string;
  title: string;
  description: string;
  invertBg?: boolean;
};
function MyExpertiseCard({
  logo,
  tag,
  title,
  description,
  invertBg = false,
}: props) {
  return (
    <div className="bg-white rounded-2xl dark:bg-OffBlack  px-8 pb-8 pt-6">
      <span className="bg-primary2 flex w-fit text-sm items-center gap-x-2 mb-5 rounded-full  py-2 px-4">
        <CodeIcon className="text-primary size-5" /> {tag}
      </span>
      <Image
        src={logo}
        alt="React Icon"
        className={cn("size-16 mx-5 ", invertBg && "dark:invert-100")}
      />
      <h2 className="font-bold font-work-sans capitalize text-3xl mt-5 mb-5">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default MyExpertiseCard;
