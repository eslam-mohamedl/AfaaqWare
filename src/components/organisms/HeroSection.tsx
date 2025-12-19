import Title from "../atoms/Title";
import GroupButtons from "../molecules/GroupButtoms";
import TypedText from "@/animations/typeEffect";
import { useTranslations } from "next-intl";
import { HighlightText } from "../atoms/HighLightWord";
function HeroSection() {
  const t = useTranslations("heroSection");
  return (
    <section className="flex bg-gradient h-[88vh] flex-col  justify-center items-center">
      <Title size="lg" variant="primary" weight="bold">
        {t("title1")}
      </Title>
      <Title size="xl" weight="bold">
        <HighlightText
          text={t("title2")}
          highlight={t("hightLightWord")}
          highlightClassName="text-primary"
        />
      </Title>
      <Title size="xl" weight="bold">
        <TypedText
          strings={[t("type1"), t("type2"), t("type3")]}
          typeSpeed={40}
          backSpeed={40}
          className=" ml-2"
        />
      </Title>
      <GroupButtons />
    </section>
  );
}

export default HeroSection;
