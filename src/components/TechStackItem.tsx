import Image from "next/image";
; // Adjust the path as necessary

function TechStackItem(props: { icon: string; name: string }) {
  const { icon, name } = props;
  return (
    <div>
      <Image src={icon} height={40} width={40} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default TechStackItem;
