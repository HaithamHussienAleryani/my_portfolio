import { TExperience } from "@/data/types";
import Image from "next/image";

function ExperienceItem({ experience }: { experience: TExperience }) {
  const { company, image, title, date } = experience;
  return (
    <div className="flex w-full border-b-zinc-200 pb-3 border-b-[1px] items-end justify-between  ">
      <div className="flex space-x-4">
        <Image
          src={image}
          alt={`${company} logo`}
          height={50}
          width={50}
          className=" rounded-full "
        />
        <div>
          <p className=" font-semibold">{title}</p>
          <span className="font-semibold text-sm text-muted-foreground">
            @{company}
          </span>
        </div>
      </div>
      <p className="text-sm">{date}</p>
    </div>
  );
}

export default ExperienceItem;
