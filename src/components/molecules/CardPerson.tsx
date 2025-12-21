import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Images from "../atoms/Images";
import { Eslam } from "../../../public/assets/images/images";
import SoicalLinks from "./footer/SoicalLinks";
export default function CardPerson() {
  const color = "text-primary";
  return (
    <div className="bg-white rounded-lg">
      <Images src={Eslam} alt="Eslam" />
      <Title size="lg" variant="primary" className="font-bold">
        Eslam Mohamed
      </Title>
      <Text size="lg">Founder | CEO</Text>
      <div className="flex justify-center">
        <SoicalLinks color={false} />
      </div>
    </div>
  );
}
