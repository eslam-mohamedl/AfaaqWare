import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Services from "@/components/organisms/Services";
import ContractSection from "@/components/organisms/ContractSection";
import PortfoiliosSection from "@/components/organisms/PortfoiliosSection";
import CommentSection from "@/components/organisms/CommentSection";
import MediaContentSection from "@/components/organisms/MediaContentSection";

function Page() {
  return (
    <div className="pt-20">
      <Header />
      <Services />
      <ContractSection />
      <PortfoiliosSection />
      <CommentSection />
      <MediaContentSection
        bg={true}
        className="relative"
        isHome={true}
      ></MediaContentSection>

      <Footer />
    </div>
  );
}

export default Page;
