import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";
type BoxProps = {
  title: string;
  text: string;
};
export default function Box({ title, text }: BoxProps) {
  const t = useTranslations();
  return (
    <div className="bg-white flex flex-col justify-center  w-70 h-45 rounded-lg">
      <Title size="xl" variant="primary">
        {t(title)}
      </Title>
      <Text size="md">{t(text)}</Text>
    </div>
  );
}
