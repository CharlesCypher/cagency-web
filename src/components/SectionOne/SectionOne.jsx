import "./SectionOne.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const SectionOne = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionOne = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionOne.current,
          start: "top 80% ",
          end: "+=500",
          markers: true,
          toggleActions: "restart none none reverse",
        },
      })
      .fromTo(
        [line1.current, line2.current, line3.current, line4.current],
        { opacity: 0, x: 0, y: 120, rotateZ: 3, transformStyle: "preserve-3d", ease: "Power3.inOut" },
        { duration: 1.1, opacity: 1, x: 0, y: 0, rotateZ: 0, transformStyle: "preserve-3d", ease: "Power3.inOut" }
      );
  }, []);
  return (
    <section className="section about-cagency">
      <div className="container">
        <div className="title-wrapper about-section" ref={sectionOne}>
          <div className="desktop">
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line1}>
                <h2 className="section-title">an agency committed TO EVOLVE</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line2}>
                <h2 className="section-title">ABSTRACT IDEAS INTO CONCREATE</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line3}>
                <h2 className="section-title">PRODUCT. MEET us, the most</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper" ref={line4}>
                <h2 className="section-title">passionate people in the industry</h2>
              </div>
            </div>
          </div>
          <div className="mobile tablet">
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">
                  an agency committed TO EVOLVE ABSTRACT IDEAS INTO CONCREATE PRODUCT. MEET us, the most passionate people in the industry
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-para-wrapper">
          <p className="about-para">
            Odama Studio is a game-changing agency. We don’t give a sh*t about the size of your company. We&apos;re designed to design high-quality
            product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
