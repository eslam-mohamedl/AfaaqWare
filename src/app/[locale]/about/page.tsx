import Navbar from "@/components/organisms/Navbar";
import HeroContentSection from "@/components/organisms/HeroContentSection";
import Footer from "@/components/organisms/Footer";
import MediaContentSection from "@/components/organisms/MediaContentSection";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroContentSection
        title1="من نحن"
        title2="شركتنا رائدة ومتميزة في خدمات تطوير وتصميم المواقع "
        title3="الإلكترونية والتدريب الشباب المصري والعربي"
        isBtn={false}
      />
      <MediaContentSection
        bg={false}
        className="relative"
        isHome={false}
      ></MediaContentSection>

      <Footer />
    </div>
  );
}
