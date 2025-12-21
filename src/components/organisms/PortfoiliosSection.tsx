import TitleSection from "../molecules/TitleSection";
import Images from "../atoms/Images";
import {
  project1,
  project2,
  project3,
  project4,
} from "../../../public/assets/images/images";
import { useTranslations } from "next-intl";
export default function PortfoiliosSection() {
  const t = useTranslations("PortoflioSection");
  return (
    <section className="container bg-gradient ">
      <TitleSection title={t("title")} text={t("subTitle")} isBlue={false} />
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <Images src={project1} alt="project1" />
        <Images src={project2} alt="project1" />
        <Images src={project3} alt="project1" />
        <Images src={project4} alt="project1" />
      </div>
    </section>
  );
}
