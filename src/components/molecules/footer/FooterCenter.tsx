import Title from "@/components/atoms/Title";
import { useTranslations } from "next-intl";

export default function FooterCenter() {
  const t = useTranslations("footer");
  return (
    <div>
      <Title size="lg" center={false} variant="white" className="mb-4">
        {t("col1.title")}
      </Title>
      <ul>
        <li className="text-white  pb-2"> {t("col1.list1")}</li>
        <li className="text-white  pb-2">{t("col1.list2")}</li>
        <li className="text-white  pb-2">{t("col1.list3")}</li>
      </ul>
    </div>
  );
}
