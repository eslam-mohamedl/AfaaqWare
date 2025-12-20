import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Services from "@/components/organisms/Services";
import ContractSection from "@/components/organisms/ContractSection";
import AboutAfaaqHome from "@/components/organisms/AboutAfaaqHome";
import PortfoiliosSection from "@/components/organisms/PortfoiliosSection";
function Page() {
  return (
    <div className="pt-20">
      <Header />
      <Services />
      <ContractSection />
      <PortfoiliosSection />
      <AboutAfaaqHome />

      <Footer />
    </div>
  );
}

export default Page;
