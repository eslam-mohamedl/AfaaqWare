import ContractSectionLeft from "../molecules/ContractSectionLeft";
import ContractSectionRight from "../molecules/ContractSectionRight";
export default function ContractSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 ">
      <ContractSectionLeft />
      <ContractSectionRight />
    </div>
  );
}
