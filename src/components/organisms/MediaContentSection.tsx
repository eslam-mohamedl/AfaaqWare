import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Images from "../atoms/Images";
type MediaContentSectionProps = {
  children: ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  className?: string;
  reverse?: boolean;
  bg: boolean;
};
export default function MediaContentSection({
  children,
  image,
  imageAlt,
  className,
  reverse,
  bg = false,
}: MediaContentSectionProps) {
  return (
    <section
      className={cn(
        "container flex flex-col md:flex-row justify-between mb-30  gap-4  py-15",
        reverse && "lg:flex-row-reverse",
        bg ? "bg-gradient rounded-lg pb-40" : "",
        className
      )}
    >
      {/*content*/}
      <div className="flex flex-col items-start justify-center">{children}</div>
      {/* Image */}
      <div>
        <Images src={image} alt={imageAlt} width={450} height={450} />
      </div>
    </section>
  );
}
