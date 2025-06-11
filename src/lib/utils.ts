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

  return builder.image(source);
}