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
      <Circle className="left-10 md:left-50 top-25  w-15 h-15" color="pink" />
      <Circle
        className="left-10 md:left-70 md:top-110 top-160 w-9 md:w-3 h-9 md:h-3"
        color="blue"
      />
      <Circle
        className="right-10 md:right-30 top-40 w-5 h-5 md:w-3 md:h-3"
        color="purple"
      />
      <Circle
        className="right-10 md:right-20  md:top-120 top-140 w-3 h-3"
        color="orange"
      />
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
