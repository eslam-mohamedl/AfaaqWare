import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Services from "@/components/organisms/Services";
import ContractSection from "@/components/organisms/ContractSection";
import AboutAfaaqHome from "@/components/organisms/AboutAfaaqHome";
import PortfoiliosSection from "@/components/organisms/PortfoiliosSection";
import CommentSection from "@/components/organisms/CommentSection";
function Page() {
  return (
    <div className="pt-20">
      <Header />
      <Services />
      <ContractSection />
      <PortfoiliosSection />
      <CommentSection />
      <AboutAfaaqHome />

      <Footer />
    </div>
  );
}

export default Page;
