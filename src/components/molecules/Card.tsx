import Title from "../atoms/Title";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Images from "../atoms/Images";
import type { CardProps } from "../../types/api";
import { service1 } from "../../../public/assets/images/images";

export function Card({ title, description, buttonText }: CardProps) {
  return (
    <div className="bg-light-primary w-[300px] dark:bg-dark-secondary flex flex-col gap-4 rounded-lg py-5 px-4 shadow-lg">
      <Title size="lg">Website Development</Title>

      <Images
        src={service1}
        alt="card image"
        width={100}
        bg="yellow"
        height={100}
      />
      <Text size="md">
        Design, programming and development services with integrated technical
        support services
      </Text>
      <Button size="sm">Order your website design now!</Button>
    </div>
  );
}

export default Card;
