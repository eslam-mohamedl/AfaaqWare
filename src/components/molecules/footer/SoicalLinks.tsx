import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "../../../../public/assets/icons/icons";
import Link from "@/components/atoms/Link";
type SoicalLinksProps = {
  color: boolean;
  href1: string;
  href2: string;
  href3: string;
};
export default function SoicalLinks({
  color = true,
  href1,
  href2,
  href3,
}: SoicalLinksProps) {
  const isWhite = color ? "text-white" : "text-black";
  return (
    <div className="flex gap-3 my-4">
      <Link href={href1} target="_blank">
        <FaWhatsapp className={`text-xl mt-1 ${isWhite}`} />
      </Link>
      <Link href={href2} target="_blank">
        <FaLinkedinIn className={`text-xl mt-1 ${isWhite}`} />
      </Link>
      <Link href={href3} target="_blank">
        <FaFacebookF className={`text-xl mt-1 ${isWhite}`} />
      </Link>
    </div>
  );
}
