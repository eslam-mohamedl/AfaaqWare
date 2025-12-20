import ContractSectionLeft from "../molecules/ContractSectionLeft";
import ContractSectionRight from "../molecules/ContractSectionRight";
export default function ContractSection() {
  return (
    <div className="container flex flex-col md:flex-row  justify-between items-center py-20 gap-10">
      <ContractSectionLeft />
      <ContractSectionRight />
    </div>
  );
}
