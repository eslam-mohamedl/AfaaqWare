import { cn } from "@/lib/cn";
import Images from "../atoms/Images";
import Button from "@/components/atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Box from "../molecules/Box";
import { business } from "../../../public/assets/images/images";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { dataBox } from "@/utils/data";
type MediaContentSectionProps = {
  className?: string;
  reverse?: boolean;
  bg: boolean;
  isHome: boolean;
};
export default function MediaContentSection({
  className,
  reverse,
  bg = false,
  isHome = false,
}: MediaContentSectionProps) {
  const t = useTranslations();
  const dir = useLocale();
  return (
    <section
      className={cn(
        "container grid grid-cols-1 md:grid-cols-2 mb-20  gap-4  py-15",
        reverse && "lg:flex-row-reverse",
        bg ? "bg-gradient rounded-lg pb-40 mb-50" : "",
        className
      )}
    >
      {/*content*/}
      <div className="flex flex-col items-start justify-center">
        {isHome ? (
          <>
            <Title
              size="lg"
              center={false}
              variant="primary"
              className="bg-white py-2 px-7 rounded-full font-semibold mb-4"
            >
              {t("AboutAfaaqWare.title1")}
            </Title>
            <Text size="md" center={false} className="font-bold mb-2">
              {t("AboutAfaaqWare.title2")}
            </Text>
            <Text size="md" center={false} className="font-bold mb-2">
              {t("AboutAfaaqWare.title3")}
            </Text>
            <Text size="md" center={false} className="font-bold mb-2">
              {t("AboutAfaaqWare.title4")}
            </Text>
            <Text size="sm" center={false} className="font-bold mb-5">
              {t("AboutAfaaqWare.title5")}
            </Text>
            <Button size="md" isRounded={true}>
              {t("AboutAfaaqWare.btn")}
            </Button>
            <div
              className={cn(
                "grid grid-cols-3  md:grid-cols-3 gap-5 absolute  -bottom-20",
                dir === "en"
                  ? "left-[0%] md:left-[15%]"
                  : "right-[0%] md:right-[7%]"
              )}
            >
              {dataBox.map((box) => (
                <Box key={box.id} title={box.title} text={box.text} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-start">
            <Title size="lg" variant="primary">
              {t("about.whyAfaaqWare.title")}
            </Title>
            <Text size="md" center={false}>
              {t("about.whyAfaaqWare.text1")}
            </Text>
            <Text size="md" center={false}>
              {t("about.whyAfaaqWare.text2")}
            </Text>
            <Button size="md" className="mt-5">
              {t("about.whyAfaaqWare.btn")}
            </Button>
          </div>
        )}
      </div>
      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <Images src={business} alt="business-img" width={450} height={450} />
      </div>
    </section>
  );
}
