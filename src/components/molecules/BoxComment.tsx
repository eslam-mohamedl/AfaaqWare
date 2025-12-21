import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { SeparatorLine } from "../atoms/SeperatorLink";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
type BoxCommentProps = {
  comment: string;
  name: string;
  className?: string;
};

export default function BoxComment({
  comment,
  name,
  className,
}: BoxCommentProps) {
  const t = useTranslations();
  return (
    <div className={cn("bg-white py-4 px-4 rounded-md border-blue", className)}>
      <Title size="md" variant="secondary">
        {t(name)}
      </Title>
      <SeparatorLine centered className="mt-2" />
      <Text size="md" className="py-4">
        {t(comment)}
      </Text>
    </div>
  );
}
