import TitleSection from "../molecules/TitleSection";
import BoxComment from "../molecules/BoxComment";
export default function CommentSection() {
  return (
    <section className="container mb-30">
      <TitleSection
        title="Our Services"
        text="We offer you a  comprehensive range of digital services."
        isBlue={false}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BoxComment />
        <BoxComment />
        <BoxComment />
        <BoxComment />
      </div>
    </section>
  );
}
