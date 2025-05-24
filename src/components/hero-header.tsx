"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#link" },
  { name: "Projects", href: "#link" },
  { name: "Contact", href: "#link" },
];

export const HeroHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className="fixed top-0 z-20 w-full px-2">
        <div
          className={cn(
            " mt-3 main-container  px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              " max-w-2xl rounded-full   lg:px-5 bg-white dark:bg-black border border-gray-00"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6  lg:gap-0 lg:py-2">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index} className={"group/nav-item"}>
                    <Link
                      href={item.href}
                      className="text-foreground group-hover/nav-item:text-primary  block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
