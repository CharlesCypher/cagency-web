import "./Main.css";
import Nav from "../Nav/Nav";
import SectionOne from "../SectionOne/SectionOne";
import Button from "../CTA/Button";
import Ticker from "../Ticker/Ticker";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SectionSeven from "../SectionSeven/SectionSeven";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor-wrapper");
    const sections = [...document.querySelectorAll(".section")];
    let options = {
      rootMargin: "0px",
      threshold: 0.75,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (target) {
          cursor.classList.add("d-none");
        }
        const { className } = target;
        console.log([className].includes("orange"));
        if (entry.intersectionRatio >= 0.75) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <>
      <main className="relative">
        <Nav />
        <div className="main-overlay"></div>
        <div className="section hero-wrapper relative">
          <div className="container hero-header-wrapper desktop data-content">
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h1 className="hero-h1">PURSUE YOUR GOAL</h1>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h1 className="hero-h1">ENJOY YOUR COFFEE</h1>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h1 className="hero-h1">WE’LL DO THE REST</h1>
              </div>
            </div>
          </div>
          <div className="hero-header-wrapper mobile">
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h1 className="hero-h1">PURSUE YOUR GOAL, ENJOY YOUR COFFEE, WE’LL DO THE REST</h1>
              </div>
            </div>
          </div>
          <Button />
          <Ticker />
        </div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSeven />
      </main>
    </>
  );
};

export default Main;
