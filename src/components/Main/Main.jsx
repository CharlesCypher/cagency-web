import "./Main.css";
import SectionZero from "../SectionZero/SectionZero";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import SectionSix from "../SectionSix/SectionSix";
import SectionSeven from "../SectionSeven/SectionSeven";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { CustomEase } from "gsap";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".section"),
        observer = ScrollTrigger.normalizeScroll(true),
        scrollTween;
      // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
      document.addEventListener(
        "touchstart",
        (e) => {
          if (scrollTween) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        },
        { capture: true, passive: false }
      );
      function goToSection(i) {
        scrollTween = gsap.to(window, {
          scrollTo: { y: i * innerHeight, autoKill: false },
          onStart: () => {
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();
          },
          duration: 1.1,
          // ease: CustomEase.create(
          //   "custom",
          //   "M0,0 C0,0 0.091,0.351 0.216,0.532 0.261,0.598 0.302,0.644 0.358,0.702 0.408,0.754 0.443,0.773 0.494,0.824 0.537,0.867 0.577,0.886 0.626,0.924 0.663,0.952 0.7,0.966 0.742,0.988 0.779,1.007 0.831,1.025 0.872,1.036 0.911,1.046 1,1.048 1,1.048 "
          // ),
          onComplete: () => (scrollTween = null),
          overwrite: true,
        });
      }
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=199%",
          onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        });
      });
      // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1),
      });
    });
    return () => ctx.revert();
  }, []);
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
