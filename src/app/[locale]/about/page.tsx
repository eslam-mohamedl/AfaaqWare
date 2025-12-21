import Navbar from "@/components/organisms/Navbar";
import HeroContentSection from "@/components/organisms/HeroContentSection";
import Footer from "@/components/organisms/Footer";
import MediaContentSection from "@/components/organisms/MediaContentSection";
import FounderSection from "@/components/organisms/FounderSection";
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroContentSection
        title1="about.heroAbout.title1"
        title2="about.heroAbout.title2"
        title3="about.heroAbout.title3"
        isBtn={false}
      />
      <MediaContentSection
        bg={false}
        className="relative"
        isHome={false}
      ></MediaContentSection>
      <FounderSection />
      <Footer />
    </div>
  );
}
