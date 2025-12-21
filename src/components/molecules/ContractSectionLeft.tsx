import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";
import { HighlightText } from "../atoms/HighLightWord";
export default function ContractSectionLeft() {
  const t = useTranslations("contractSection");
  return (
    <div className="flex flex-col justify-center items-start">
      <Title size="xl" weight="bold" variant="secondary">
        <HighlightText
          text={t("title1")}
          highlight={t("hightLightWord1")}
          highlightClassName="text-primary"
        />
      </Title>
      <Title size="xl" variant="secondary">
        <HighlightText
          text={t("title2")}
          highlight={t("hightLightWord2")}
          highlightClassName="text-primary"
        />
      </Title>
      <Title size="xl" variant="secondary" center={false}>
        <HighlightText
          text={t("title3")}
          highlight={t("hightLightWord3")}
          highlightClassName="text-primary"
        />
      </Title>
      <Text size="xl" center={false} variant="orange" className="my-4 ">
        {t("text")}
      </Text>
      <Button size="md" isRounded={true}>
        {t("btn")}
      </Button>
    </div>
  );
}
