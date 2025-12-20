import FooterCenter from "../molecules/footer/FooterCenter";
import FooterLeftSide from "../molecules/footer/FooterLeftSide";
import FooterRightSide from "../molecules/footer/FooterRightSide";
import CopyRight from "../atoms/CopyRight";
import { SeparatorLine } from "../atoms/SeperatorLink";
function Footer() {
  return (
    <section className="bg-footer pt-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <FooterLeftSide />
        <FooterCenter />
        <FooterRightSide />
      </div>
      <div className="container">
        <SeparatorLine />
        <CopyRight />
      </div>
    </section>
  );
}

export default Footer;
