import CardPerson from "../molecules/CardPerson";
import TitleSection from "../molecules/TitleSection";
import { dataPerson } from "@/utils/data";
import { useTranslations } from "next-intl";
export default function FounderSection() {
  const t = useTranslations("CardsFounder");
  return (
    <section className="container mb-20">
      <TitleSection title={t("title")} text={t("subtitle")} isBlue={false} />
      <div className="grid grid-cols-3 gap-10">
        {dataPerson.map((person) => (
          <CardPerson
            key={person.id}
            img={person.img}
            alt={person.alt}
            title={person.title}
            text={person.text}
            href1={person.href1}
            href2={person.href2}
            href3={person.href3}
          />
        ))}
      </div>
    </section>
  );
}
