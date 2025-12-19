import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
export default function ContractSectionLeft() {
  return (
    <div className="flex flex-col justify-center items-start">
      <Title size="xl">40% upon signing the contract</Title>
      <Title size="xl">30% after design approval</Title>
      <Title size="xl">30% upon full store receipt</Title>
      <Text size="lg" center={false} variant="orange" className="my-4">
        The payment methods clause is mentioned in the notarized contract
        between the two parties.
      </Text>
      <Button>Create a website now</Button>
    </div>
  );
}
