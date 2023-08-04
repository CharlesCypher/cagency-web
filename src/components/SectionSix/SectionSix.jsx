import "./SectionSix.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionSix = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const line1 = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85% ",
            end: "+=500",
            toggleActions: "restart",
          },
        })
        .fromTo(
          line1.current,
          { duration: 2.5, opacity: 1, scale: 1.02, ease: "Power3.inOut" },
          {
            duration: 2.5,
            opacity: 0.2,
            scale: 0.9,
            ease: "Power3.inOut",
          }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="section" ref={sectionRef}>
      <div className="container relative">
        <div className="client-block">
          <h1 ref={line1} className="trusted-text">
            Trusted by
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
