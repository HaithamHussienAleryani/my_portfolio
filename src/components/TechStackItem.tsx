import { cn, urlFor } from "@/lib/utils";

import Image from "next/image"; // Adjust the path as necessary

type props = {
  item: any;
  hideImage?: boolean;
};

function TechStackItem(props: props) {
  const { item, hideImage = false } = props;

  const ImageUrl = urlFor(item.icon);
  return (
    <div className="flex items-center space-x-3 bg-white dark:bg-OffBlack2  px-4 py-[5px] rounded-full">
      {!hideImage && (
        <Image
          src={ImageUrl}
          height={30}
          width={30}
          className={cn(item.invert && "dark:invert-100", "size-5")}
          alt={item.title}
        />
      )}
      <span className="text-sm capitalize ">{item.title}</span>
    </div>
  );
}

export default TechStackItem;
