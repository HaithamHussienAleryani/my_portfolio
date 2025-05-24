"use client";
import Link from "next/link";
import { Logo } from "./logo";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { menuItems } from "@/data/constants";

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
            " mt-3 main-container px-6   transition-all duration-300 lg:px-12",
            isScrolled &&
              " max-w-2xl rounded-full  lg:px-5 bg-white dark:bg-black lg:border border-gray-00"
          )}
        >
          <div className="relative flex   flex-row items-center justify-between gap-6  lg:gap-0 py-2">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit md:block">
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
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
