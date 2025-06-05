import Image from "next/image"; // Adjust the path as necessary

type props = {
  icon: string;
  name: string;
  hideImage?: boolean;
};

function TechStackItem(props: props) {
  const { icon, name, hideImage = false } = props;
  return (
    <div className="flex items-center space-x-3 bg-white dark:bg-OffBlack2  px-4 py-[5px] rounded-full">
      {!hideImage && <Image src={icon} height={20} width={20} alt={name} />}
      <span className="text-sm capitalize ">{name}</span>
    </div>
  );
}

export default TechStackItem;
