import Images from "../atoms/Images";
import { contractImage } from "../../../public/assets/images/images";
export default function ContractSectionRight() {
  return (
    <div>
      <Images
        src={contractImage}
        alt="Contract-image"
        height={450}
        width={450}
      />
    </div>
  );
}
