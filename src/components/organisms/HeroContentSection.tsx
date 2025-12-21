import Title from "../atoms/Title";
import GroupButtons from "../molecules/GroupButtoms";
import TypedText from "@/animations/typeEffect";
import { useTranslations } from "next-intl";
import { HighlightText } from "../atoms/HighLightWord";
import Circle from "../atoms/Circle";
type HeroContentSectionProps = {
  title1?: string;
  title2?: string;
  title3?: string;
  isBtn: boolean;
  type1?: string;
  type2?: string;
  type3?: string;
  hightLightWord?: string;
};
function HeroContentSection({
  title1 = "heroSection.title1",
  title2 = "heroSection.title2",
  title3 = "heroSection.title3",
  isBtn,
  type1 = "heroSection.type1",
  type3 = "heroSection.type2",
  type2 = "heroSection.type3",
  hightLightWord = "heroSection.hightLightWord",
}: HeroContentSectionProps) {
  const t = useTranslations();
  return (
    <section className="flex bg-gradient h-screen flex-col  justify-center items-center relative">
      <Title size="lg" variant="primary" className="font-bold mb-2">
        {t(title1)}
      </Title>
      <Circle size={70} top={140} left={130} color="pink" />
      <Circle size={15} top={430} left={230} color="blue" />
      <Circle size={12} top={140} left={1200} color="purple" />
      <Circle size={20} top={430} left={1200} color="orange" />
      {isBtn ? (
        <>
          <Title size="xl" variant="secondary" className="font-bold mb-2">
            <HighlightText
              text={t(title2)}
              highlight={t(hightLightWord)}
              highlightClassName="text-primary"
            />
          </Title>
          <Title size="xl" variant="secondary" className="font-bold mb-2">
            <TypedText
              strings={[t(type1), t(type2), t(type3)]}
              typeSpeed={40}
              backSpeed={40}
              className=" ml-2"
            />
          </Title>
          <GroupButtons />
        </>
      ) : (
        <>
          <Title size="xl" variant="secondary" className="font-bold mb-2">
            {t(title2)}
          </Title>
          <Title size="xl" variant="secondary" className="font-bold mb-2">
            {t(title3)}
          </Title>
        </>
      )}
    </section>
  );
}

export default HeroContentSection;
