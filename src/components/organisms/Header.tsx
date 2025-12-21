import Navbar from "./Navbar";
import HeroContentSection from "./HeroContentSection";
function Header() {
  return (
    <>
      <Navbar />

      <HeroContentSection isBtn={true} />
    </>
  );
}

export default Header;
