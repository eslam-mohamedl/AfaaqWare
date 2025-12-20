import { cn } from "@/lib/cn";
import Images from "../atoms/Images";
import Button from "@/components/atoms/Button";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Box from "../molecules/Box";
import { business } from "../../../public/assets/images/images";

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
              AfaqWare Web and Application Software
            </Title>
            <Text size="md" center={false} className="font-bold mb-2">
              An Egyptian company specializing in web and application
              programming.
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
            <div className="grid grid-cols-1 container md:grid-cols-3 gap-5 absolute left-20 -bottom-20">
              <Box />
              <Box />
              <Box />
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-start">
            <Title size="lg" variant="primary">
              لماذا أفاق وير
            </Title>
            <Text size="md" center={false}>
              أفاق وير هي شركة Software House متكاملة، نبني مشاريع العملاء من
              البداية حتى الإطلاق: دراسة الفكرة، تصميم UI/UX، Front-end،
              Back-end، Testing. فريقنا من الخبراء يضمن تنفيذ المشاريع باحترافية
              عالية وفق أعلى معايير الجودة. نقدم عروض أسعار واضحة، وننفذ المشروع
              بالكامل بعد موافقة العميل
            </Text>
            <Text size="md" center={false}>
              التدريب نقدم برامج تدريبية عملية لشباب الفريش في UI/UX، Front-end،
              Back-end، Testing، ليكونوا جاهزين لسوق العمل أو الانضمام لمشاريع
              الشركة كمحترفين مستقلين. هدفنا تمكين الطلاب وتحويلهم إلى محترفين
              قادرين على بناء مشاريع رقمية متكاملة بخبرة عملية حقيقية.
            </Text>
            <Button size="md" className="mt-5">
              انشئ موقعك الان
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
