import MediaContentSection from "@/components/organisms/MediaContentSection";
import { business } from "../../../public/assets/images/images";
import Button from "@/components/atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
export default function AboutAfaaqHome() {
  return (
    <div>
      <MediaContentSection image={business} bg={true} imageAlt="business-img">
        <Title
          size="lg"
          center={false}
          variant="primary"
          className="bg-white py-2 px-7 rounded-full font-semibold mb-4"
        >
          AfaqWare Web and Application Software
        </Title>
        <Text size="md" center={false} className="font-bold mb-2">
          An Egyptian company specializing in web and application programming.
        </Text>
        <Text size="md" center={false} className="font-bold mb-2">
          Training Egyptian and Arab youth on real projects
        </Text>
        <Text size="md" center={false} className="font-bold mb-2">
          More than one year of experience in project construction
        </Text>
        <Text size="md" center={false} className="font-bold mb-5">
          Providing after-sales technical support
        </Text>
        <Button size="md" isRounded={true}>
          Create your website now
        </Button>
      </MediaContentSection>
    </div>
  );
}
