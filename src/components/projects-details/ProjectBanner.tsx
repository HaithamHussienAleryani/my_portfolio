import Image from "next/image";
import React from "react";
import { urlFor } from "@/lib/utils";

function ProjectBanner({ image }: { image: any }) {
  const imageUrl =
    image && image.asset ? urlFor(image) : "/images/placeholder.png";

  return (
    <div className="mt-8">
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
