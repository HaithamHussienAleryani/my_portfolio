import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource): string {

  return builder.image(source).url();
}
export function formatDate(dateString: string): string {
  const formattedDate = dateString
    ? new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "Date N/A";
  return formattedDate;
}