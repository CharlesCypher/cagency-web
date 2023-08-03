import "./SectionThree.css";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const SectionThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const line6 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85% ",
            end: "+=500",
            once: true,
            // toggleActions: "restart none none reverse",
          },
        })
        .fromTo(
          [line1.current, line2.current, line3.current, line4.current, line5.current, line6.current],
          { opacity: 0, y: 120, rotateZ: 3, transformStyle: "preserve-3d", ease: "Power3.inOut" },
          {
            duration: 1.4,
            opacity: 1,
            y: 0,
            rotateZ: 0,
            transformStyle: "preserve-3d",
            ease: "Power3.inOut",
          }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="section mouse-ani-sect fp-section" ref={sectionRef}>
      <div className="container relative data-content">
        <div className="section-content sect-3">
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line1}>
              <Link to="/">
                <h2 className="section-title text-white">Branding</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line2}>
              <Link to="/">
                <h2 className="section-title text-white">Web Development</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line3}>
              <Link to="/">
                <h2 className="section-title text-white">Mobile App design</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line4}>
              <Link to="/">
                <h2 className="section-title text-white">Web design</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line5}>
              <Link to="/">
                <h2 className="section-title text-white">illustration</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover" ref={line6}>
              <Link to="/">
                <h2 className="section-title text-white">animation</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
