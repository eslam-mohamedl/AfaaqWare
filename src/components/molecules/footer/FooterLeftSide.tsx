import Logo from "@/components/atoms/Logo";
import { logo } from "../../../../public/assets/images/images";
import Text from "@/components/atoms/Text";
import SoicalLinks from "./SoicalLinks";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
export default function FooterLeftSide() {
  const locale = useLocale();
  const nextLocale = locale === "en" ? "-ml-5" : "-mr-5";
  const t = useTranslations("footer");
  return (
    <div>
      <Logo
        src={logo}
        alt="logo image"
        href="/"
        className={`${nextLocale} mb-2`}
      />
      <Text
        size="md"
        className="w-full md:w-[90%]"
        center={false}
        variant="white"
      >
        {t("text")}
      </Text>
      <SoicalLinks href1="eslam" href2="eslam" href3="eslam" color={true} />
    </div>
  );
}
