import TitleSection from "../molecules/TitleSection";
import Images from "../atoms/Images";
import {
  project1,
  project2,
  project3,
  project4,
} from "../../../public/assets/images/images";
export default function PortfoiliosSection() {
  return (
    <section className="container bg-gradient ">
      <TitleSection
        title="Our Services"
        text="We offer you a  comprehensive range of digital services."
        isBlue={false}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <Images src={project1} alt="project1" />
        <Images src={project2} alt="project1" />
        <Images src={project3} alt="project1" />
        <Images src={project4} alt="project1" />
      </div>
    </section>
  );
}
