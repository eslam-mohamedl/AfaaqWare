import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "../../../../public/assets/icons/icons";
import Link from "@/components/atoms/Link";
type SoicalLinksProps = {
  color: boolean;
};
export default function SoicalLinks({ color = true }: SoicalLinksProps) {
  const isWhite = color ? "text-white" : "text-black";
  return (
    <div className="flex gap-3 my-4">
      <Link href="https://wa.me/01093496784" target="_blank">
        <FaWhatsapp className={`text-xl mt-1 ${isWhite}`} />
      </Link>
      <Link href="https://linkedin.com" target="_blank">
        <FaLinkedinIn className={`text-xl mt-1 ${isWhite}`} />
      </Link>
      <Link href="https://facebook.com" target="_blank">
        <FaFacebookF className={`text-xl mt-1 ${isWhite}`} />
      </Link>
    </div>
  );
}
