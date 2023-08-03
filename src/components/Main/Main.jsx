import "./Main.css";
import Nav from "../Nav/Nav";
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
      <main style={{ position: "relative", height: "100%" }}>
        <Nav />
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
