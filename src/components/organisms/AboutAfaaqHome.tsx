import MediaContentSection from "@/components/organisms/MediaContentSection";
import { business } from "../../../public/assets/images/images";
import Button from "@/components/atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Box from "../molecules/Box";
export default function AboutAfaaqHome() {
  return (
    <div>
      <MediaContentSection
        image={business}
        bg={true}
        imageAlt="business-img"
        className="relative"
      >
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
        <div className="grid grid-cols-1 container md:grid-cols-3 gap-5 absolute left-0 -bottom-20">
          <Box />
          <Box />
          <Box />
        </div>
      </MediaContentSection>
    </div>
  );
}
