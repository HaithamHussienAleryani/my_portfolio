
import Image from "next/image";
import  MyLogo  from "../../public/logo.svg";

export const Logo = () => {
  return (
    <div className={"flex justify-center items-center gap-x-3"}>
      <Image src={MyLogo} height={60}  width={60} alt={"My Logo"} />
    </div>
  );
};
