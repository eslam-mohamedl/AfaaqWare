import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "../../../../public/assets/icons/icons";
import Link from "@/components/atoms/Link";
export default function SoicalLinks() {
  return (
    <div className="flex gap-3 my-4">
      <Link href="https://wa.me/01093496784" target="_blank">
        <FaWhatsapp className="text-2xl" />
      </Link>
      <Link href="https://linkedin.com" target="_blank">
        <FaLinkedinIn className="text-2xl" />
      </Link>
      <Link href="https://facebook.com" target="_blank">
        <FaFacebookF className="text-xl mt-1" />
      </Link>
    </div>
  );
}
