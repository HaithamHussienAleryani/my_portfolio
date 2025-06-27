import { urlFor } from "@/lib/utils";
import Image from "next/image";

function ExperienceItem({ experience }: { experience: any }) {
  const { company, image, position, dateRange } = experience;

  const imageUrl = urlFor(image);

  return (
    <div className="flex w-full border-b-zinc-200 dark:border-b-zinc-600 pb-3 border-b-[1px] items-end justify-between  ">
      <div className="flex space-x-4">
        <Image
          src={imageUrl}
          alt={`${company} logo`}
          height={50}
          width={50}
          className=" rounded-full "
        />
        <div>
          <p className=" font-semibold">{position}</p>
          <span className="font-semibold text-sm text-muted-foreground">
            @{company}
          </span>
        </div>
      </div>
      <p className="text-sm">
        {dateRange.startDate} - {dateRange.endDate ?? "Present"}
      </p>
    </div>
  );
}

export default ExperienceItem;
