import Text from "../atoms/Text";
import Title from "../atoms/Title";
import type { TitleSectionProps } from "../../types/api";
export default function TitleSection({
  title,
  text,
  titleVariant = "white",
  TextVariant = "primary",
  highlightWord,
}: TitleSectionProps) {
  const parts = highlightWord ? title.split(highlightWord) : [title];
  return (
    <div className="mt-10 mb-5">
      <Title size="md" variant={titleVariant}>
        {highlightWord ? (
          <>
            {parts[0]}
            <span className="text-primary">{highlightWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </Title>
      <Text size="md" variant={TextVariant}>
        {text}
      </Text>
    </div>
  );
}
