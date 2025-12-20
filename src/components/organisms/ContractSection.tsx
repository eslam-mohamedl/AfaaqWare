import ContractSectionLeft from "../molecules/ContractSectionLeft";
import ContractSectionRight from "../molecules/ContractSectionRight";

export default function ContractSection() {
  return (
    <div className="mb-20">
      <div className="container flex flex-col md:flex-row  justify-between items-center  gap-10">
        <ContractSectionLeft />
        <ContractSectionRight />
      </div>
    </div>
  );
}
