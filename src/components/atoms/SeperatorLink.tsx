import { cn } from "@/lib/cn";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  centered?: boolean;
  className?: string;
}

export function SeparatorLine({
  orientation = "horizontal",
  centered = false,
  className,
}: SeparatorProps) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? centered
            ? "w-11/12 mx-auto h-px bg-gray-200"
            : "w-300 h-px bg-gray-200"
          : centered
          ? "h-1/2 my-auto bg-gray-200 sm:h-2/3 md:h-3/4"
          : "h-full w-px bg-gray-200",
        className
      )}
    ></div>
  );
}
