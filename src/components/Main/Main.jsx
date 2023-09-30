import "./Main.css";
import SectionZero from "../SectionZero/SectionZero";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";

const Main = () => {
  return (
    <>
      <main className="relative" style={{ height: "100%" }}>
        <SectionZero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSeven />
        <SectionSix />
      </main>
    </>
  );
};

export default Main;
