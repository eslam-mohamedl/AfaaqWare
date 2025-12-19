interface TitleProps {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  center?: boolean;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  weight?: "regular" | "semibold" | "bold";
}

export default function Title({
  children,
  size = "md",
  center = true,
  variant = "white",
  weight = "semibold",
  className = "py-0  capitalize font-semibold leading-relaxed ",
  ...props
}: TitleProps) {
  const sizes = {
    sm: "text-sm md:text-base lg:text-lg",
    md: "text-base md:text-xl lg:text-2xl",
    lg: "text-xl md:text-2xl lg:text-3xl",
    xl: "text-2xl md:text-3xl lg:text-4xl",
  };
  const variants = {
    primary: "text-primary",
    secondary: "text-dark",
    white: "text-bg",
  };
  const weightVariants = {
    regular: "font-regular",
    semibold: "font-semibold",
    bold: " font-bold",
  };
  const centerClass = center ? "text-center" : "";
  const classesHeading = `${sizes[size]}  ${variants[variant]} ${weightVariants[weight]} ${centerClass} ${className}`;
  return (
    <>
      <h2 className={classesHeading} {...props}>
        {children}
      </h2>
    </>
  );
}
