import Title from "../atoms/Title";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Images from "../atoms/Images";
import type { CardProps } from "../../types/api.d";
import { useTranslations } from "next-intl";
export function Card({
  title,
  description,
  buttonText,
  img,
  bg,
  bgBtn,
}: CardProps) {
  const t = useTranslations();
  return (
    <div className="bg-light-primary w-full dark:bg-dark-secondary flex flex-col justify-center items-center gap-4 rounded-lg py-5 px-4 shadow-lg">
      <Title size="lg" weight="bold" variant="secondary">
        {t(title)}
      </Title>

      <Images src={img} alt="card image" width={100} bg={bg} height={100} />
      <Text size="md">{t(description)}</Text>
      <Button
        bgBtn={bgBtn}
        size="sm"
        fullWidth={true}
        variant="outline1"
        className="w-full"
      >
        {t(buttonText)}
      </Button>
    </div>
  );
}

export default Card;
