import { cn } from "@/lib/cn";
interface TextProps {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  center?: boolean;
  variant?: "primary" | "orange" | "gray" | "light";
  className?: string;
}

export default function Text({
  children,
  size = "md",
  center = true,
  variant = "primary",
  className = "pt-2.5 capitalize font-semibold",
  ...props
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-[17px]",
    lg: "text-[20px]",
    xl: "text-xl",
  };
  const variants = {
    primary: "text-bg",
    orange: "text-orange",
    gray: "text-gray-300",
    light: "text-bg",
  };
  return (
    <>
      <p
        className={cn(
          sizes[size],
          variants[variant],
          center ? "text-center" : "",
          className
        )}
        {...props}
      >
        {children}
      </p>
    </>
  );
}
