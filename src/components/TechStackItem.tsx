import Image from "next/image"; // Adjust the path as necessary
function TechStackItem(props: { icon: string; name: string }) {
  const { icon, name } = props;
  return (
    <div className="flex items-center space-x-3 bg-white dark:bg-OffBlack2  px-4 py-2 rounded-full">
      <Image src={icon} height={20} width={20} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default TechStackItem;
