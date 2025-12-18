import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useTranslations } from "next-intl";
function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className="pt-20">
      <Navbar />
      <h3 className="bg-primary">{t("title")}</h3>

      <Footer />
    </div>
  );
}

export default Page;
