import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { useTranslations } from "next-intl";
import Card from "@/components/molecules/Card";
function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className="pt-20">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default Page;
