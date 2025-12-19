import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Services from "@/components/organisms/Services";
import ContractSection from "@/components/organisms/ContractSection";
function Page() {
  return (
    <div className="pt-20">
      <Header />
      <Services />
      <ContractSection />
      <Footer />
    </div>
  );
}

export default Page;
