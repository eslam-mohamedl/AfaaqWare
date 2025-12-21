import { dataServices } from "@/utils/data";
import Card from "../molecules/Card";
import TitleSection from "../molecules/TitleSection";
import { useTranslations } from "next-intl";
export default function Services() {
  const t = useTranslations("servicesSection.heading");
  return (
    <section className="mb-20">
      <TitleSection title={t("title")} text={t("subTitle")} isBlue={true} />
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-3 ">
        {dataServices.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.text}
            buttonText={card.btn}
            img={card.img}
            bg={card.bg}
            bgBtn={card.bgBtn}
          />
        ))}
      </div>
    </section>
  );
}
