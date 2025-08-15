import { urlFor } from "@/lib/utils";
import Image from "next/image";

function ProjectBanner({ image }: { image: any }) {
  const imageUrl =
    image && image.asset ? urlFor(image) : "/images/placeholder.png";

  return (
    <div className="mb-8">
      <Image
        width={1000}
        height={300}
        src={imageUrl}
        alt="Project banner"
        className="rounded-2xl"
      />
    </div>
  );
}

export default ProjectBanner;
