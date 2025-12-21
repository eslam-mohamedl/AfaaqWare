import Title from "@/components/atoms/Title";
import Link from "@/components/atoms/Link";
import { useTranslations } from "next-intl";
export default function FooterRightSide() {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col ">
      <Title size="lg" center={false} variant="white" className="mb-4">
        {t("col2.title1")}
      </Title>
      <Link href="/login"> {t("col2.list1")}</Link>
      <Link href="/login"> {t("col2.list2")}</Link>
      <Link href="/login"> {t("col2.list3")}</Link>
      <Link href="/login"> {t("col2.list4")}</Link>
    </div>
  );
}
