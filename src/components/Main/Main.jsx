import "./Main.css";
import Nav from "../Nav/Nav";
import SectionOne from "../SectionOne/SectionOne";
import Button from "../CTA/Button";
import Ticker from "../Ticker/Ticker";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [line1.current, line2.current, line3.current],
      {
        duration: 2,
        opacity: 0,
        x: 0,
        y: 120,
        rotateZ: 3,
        transformStyle: "preserve-3d",
        ease: "Power3.inOut",
      },
      { duration: 1.1, opacity: 1, x: 0, y: 0, rotateZ: 0, transformStyle: "preserve-3d", ease: "Power3.inOut", delay: 0.5 }
    );

    const cursor = document.querySelector(".custom-cursor-wrapper");
    const sections = [...document.querySelectorAll(".section")];
    let options = {
      rootMargin: "0px",
      threshold: 0.75,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        const { className } = target;
        if (className) {
          // cursor.classList.add("d-none");
        }
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
              <div className="text-wrapper" ref={line1}>
                <h1 className="hero-h1">PURSUE YOUR GOAL</h1>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line2}>
                <h1 className="hero-h1">ENJOY YOUR COFFEE</h1>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line3}>
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
        {/* <SectionSix /> */}
      </main>
    </>
  );
};

export default Main;
