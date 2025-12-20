import Text from "../atoms/Text";
import Title from "../atoms/Title";
import type { TitleSectionProps } from "../../types/api.d";
import { cn } from "@/lib/cn";

export default function TitleSection({
  title,
  text,
  isBlue,
}: TitleSectionProps) {
  return (
    <div className={cn("py-20  flex flex-col items-center")}>
      <Title
        size="md"
        className={cn(
          "bg-primary inline-block  px-7 py-3 rounded-full font-bold",
          isBlue ? "bg-blue-400 text-primary" : "bg-blue-200 text-primary"
        )}
      >
        {title}
      </Title>
      <Text size="lg" className="font-semibold mt-5">
        {text}
      </Text>
    </div>
  );
}
