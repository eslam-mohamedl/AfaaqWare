import Images from "../atoms/Images";
import { contractImage } from "../../../public/assets/images/images";
export default function ContractSectionRight() {
  return (
    <div>
      <Images
        src={contractImage}
        alt="Contract-image"
        height={430}
        width={430}
      />
    </div>
  );
}
