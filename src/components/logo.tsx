import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <h3 className={cn(className, "text-2xl font-bold font-work-sans")}>
      H|<span className="text-primary font-normal">H</span>
    </h3>
  );
};
