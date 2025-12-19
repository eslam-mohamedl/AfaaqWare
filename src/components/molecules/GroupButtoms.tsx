import Button from "../atoms/Button";
import { useTranslations } from "next-intl";
export default function GroupButtons() {
  const t = useTranslations("heroSection");
  return (
    <div className="flex gap-4 mt-6">
      <Button size="md" isRounded={true}>
        {t("btn1")}
      </Button>
      <Button variant="outline1" size="md" isRounded={true}>
        {t("btn2")}
      </Button>
    </div>
  );
}
