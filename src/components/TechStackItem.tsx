import { cn } from "@/lib/utils";
import Image from "next/image"; // Adjust the path as necessary

type props = {
  icon: string;
  name: string;
  hideImage?: boolean;
  invert: boolean;
};

function TechStackItem(props: props) {
  const { icon, name, hideImage = false, invert } = props;
  return (
    <div className="flex items-center space-x-3 bg-white dark:bg-OffBlack2  px-4 py-[5px] rounded-full">
      {!hideImage && (
        <Image
          src={icon}
          className={cn(invert && "dark:invert-100", "size-5")}
          alt={name}
        />
      )}
      <span className="text-sm capitalize ">{name}</span>
    </div>
  );
}

export default TechStackItem;
