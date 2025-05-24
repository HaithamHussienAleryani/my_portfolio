import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={"flex justify-center items-center gap-x-3"}>
      <h3 className={cn(className, "text-2xl font-extrabold font-sans")}>
        H|<span className="text-primary font-normal">H</span>
      </h3>
    </div>
  );
};
