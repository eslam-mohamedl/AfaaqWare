import CardPerson from "../molecules/CardPerson";
import TitleSection from "../molecules/TitleSection";

export default function FounderSection() {
  return (
    <section className="container mb-20">
      <TitleSection
        title="Our Services"
        text="We offer you a  comprehensive range of digital services."
        isBlue={false}
      />
      <div className="grid grid-cols-3 gap-10">
        <CardPerson />
        <CardPerson />
        <CardPerson />
      </div>
    </section>
  );
}
