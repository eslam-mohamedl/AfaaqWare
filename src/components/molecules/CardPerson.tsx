import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Images from "../atoms/Images";
import SoicalLinks from "./footer/SoicalLinks";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
interface CardPersonProps {
  img: string | StaticImageData;
  alt: string;
  title: string;
  text: string;
  href1: string;
  href2: string;
  href3: string;
}
export default function CardPerson({
  img,
  alt,
  title,
  text,
  href1,
  href2,
  href3,
}: CardPersonProps) {
  const t = useTranslations();
  return (
    <div className="bg-white rounded-lg">
      <Images src={img} alt={alt} />
      <Title size="lg" variant="primary" className="font-bold">
        {t(title)}
      </Title>
      <Text size="lg">{t(text)}</Text>
      <div className="flex justify-center">
        <SoicalLinks href1={href1} href2={href2} href3={href3} color={false} />
      </div>
    </div>
  );
}
