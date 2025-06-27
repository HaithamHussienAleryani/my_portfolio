import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <h3
      className={cn(className, "text-2xl select-none font-bold font-work-sans")}
    >
      H|<span className="text-primary select-none ">H</span>
    </h3>
  );
};
