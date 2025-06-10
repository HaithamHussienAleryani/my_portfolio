import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {


  return {
    url: () => '/images/placeholder.png',

    width: () => builder.image(source),
    height: () => builder.image(source),
    fit: () => builder.image(source),

  };

  return builder.image(source);
}