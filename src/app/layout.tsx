import type { Metadata } from "next";
import { DM_Serif_Display, Questrial } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MobileNavBar from "@/components/MobileNavBar";

const work_sans = DM_Serif_Display({
  weight: ["400"],
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
  title: "Haitham Hussien | Flutter Developer",
  description: "A portfolio website for Haitham Hussien, a Flutter developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${work_sans.variable} ${dm_sans.variable}   antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme={"light"}>
          {children}
        </ThemeProvider>
        <MobileNavBar />
      </body>
    </html>
  );
}
