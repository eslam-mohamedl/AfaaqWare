import { dataServices } from "@/utils/data";
import Card from "../molecules/Card";
export default function Services() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-3 py-20">
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
  );
}
