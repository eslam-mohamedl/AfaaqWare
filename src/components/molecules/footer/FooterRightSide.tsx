import Title from "@/components/atoms/Title";
import Link from "@/components/atoms/Link";
export default function FooterRightSide() {
  return (
    <div className="flex flex-col ">
      <Title size="lg" center={false} variant="white" className="mb-4">
        Important links
      </Title>
      <Link href="/login">Home</Link>
      <Link href="/login">About us</Link>
      <Link href="/login">Training</Link>
      <Link href="/login">Contact Us</Link>
    </div>
  );
}
