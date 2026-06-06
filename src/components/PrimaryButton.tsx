import { Button } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

type props = {
  title: string;
  className?: string;
  href?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  icon?: string;
  invertIcon?: boolean;
};

function PrimaryButton({
  title,
  className,
  href = "#",
  variant = "default",
  icon,
  invertIcon = false,
}: props) {
  return (
    <Button
      asChild
      size={"lg"}
      variant={variant}
      className={cn(
        "px-3 hover:px-5 w-fit hover:text-white dark:hover:text-black hover:bg-primary dark:hover:bg-primary transition-all duration-500 rounded-full",
        className,
      )}
    >
      <Link href={href}>
        {icon && (
          <Image
            src={icon}
            alt={`${title} button`}
            className={cn("size-5", invertIcon && "dark:invert-100")}
          />
        )}
        <span className="px-1 text-sm md:text-md">{title}</span>
      </Link>
    </Button>
  );
}

export default PrimaryButton;
