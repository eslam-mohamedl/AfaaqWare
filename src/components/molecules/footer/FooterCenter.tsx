import Title from "@/components/atoms/Title";
export default function FooterCenter() {
  return (
    <div>
      <Title size="lg" center={false} variant="white" className="mb-4">
        Our service
      </Title>
      <ul>
        <li className="text-white  pb-2">Website design</li>
        <li className="text-white  pb-2">App design</li>
        <li className="text-white  pb-2">Training Egyptian and Arab youth</li>
      </ul>
    </div>
  );
}
