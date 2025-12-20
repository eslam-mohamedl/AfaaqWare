import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { SeparatorLine } from "../atoms/SeperatorLink";
export default function BoxComment() {
  return (
    <div className="bg-white py-4 px-4 rounded-md border-blue ">
      <Title size="md" variant="secondary">
        samy
      </Title>
      <SeparatorLine centered className="mt-2" />
      <Text size="md" className="py-4">
        The training opportunity was great and I benefited a lot from the team
        concept.
      </Text>
    </div>
  );
}
