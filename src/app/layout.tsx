import type { Metadata } from "next";
import { Titillium_Web, Questrial } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MobileNavBar from "@/components/MobileNavBar";
import { HeroHeader } from "@/components/hero-header";
import { Lenis } from "lenis/react";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import RightsReservedSection from "@/components/RightsReservedSection";

const work_sans = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const dm_sans = Questrial({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Haitham Hussien | Senior Front-End Developer",
  description: "Please click the link and check out my portfolio",
  metadataBase: new URL("https://haithm.dev"), // <--- ADD THIS LINE
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haithm.dev",
    images: {
      url: "/opengraph-image.png", // This will now resolve to https://haithm.dev/opengraph-image.png
      width: 1200,
      height: 630,
      alt: "My Website Open Graph Image",
      type: "image/png", // Optional but good practice to explicitly state the type
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Haitham Hussien | Senior Front-End Developer",
    description: "Please click the link and check out my portfolio",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Lenis root>
        <body
          className={` ${work_sans.variable} ${dm_sans.variable}   antialiased`}
        >
          <ThemeProvider attribute={"class"} defaultTheme={"light"}>
            <HeroHeader />
            {children}
            <RightsReservedSection />
            <MobileNavBar />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </Lenis>
    </html>
  );
}
