import Title from "../atoms/Title";
import Text from "../atoms/Text";
export default function Box() {
  return (
    <div className="bg-white flex flex-col justify-center  w-70 h-45 rounded-lg">
      <Title size="xl" variant="primary">
        1 +{" "}
      </Title>
      <Text size="md">Years of experience </Text>
    </div>
  );
}
