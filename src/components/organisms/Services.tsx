import { dataServices } from "@/utils/data";
import Card from "../molecules/Card";
import TitleSection from "../molecules/TitleSection";

export default function Services() {
  return (
    <section className="mb-20">
      <TitleSection
        title="Our Services"
        text="We offer you a  comprehensive range of digital services."
        isBlue={true}
      />
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-3 ">
        {dataServices.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.text}
            buttonText={card.btn}
            img={card.img}
            bg={card.bg}
            bgBtn={card.bgBtn}
          />
        ))}
      </div>
    </section>
  );
}
