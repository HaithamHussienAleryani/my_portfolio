"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const syncThemeCookie = (theme: "light" | "dark") => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    syncThemeCookie(resolvedTheme === "dark" ? "dark" : "light");
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration errors and flash of incorrect icon
    return <Button variant="ghost" size="icon" disabled className="w-9 h-9" />;
  }

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    syncThemeCookie(nextTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full cursor-pointer bg-white border  p-5 dark:bg-muted md:dark:bg-transparent md:bg-transparent md:border-none"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.4rem] w-[1.4rem]" />
      ) : (
        <Moon className="h-[1.4rem] w-[1.4rem]" />
      )}
    </Button>
  );
}
