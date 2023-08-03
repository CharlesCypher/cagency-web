import "./SectionTwo.css";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const paper1 = useRef(null);
  const paper2 = useRef(null);
  const paper3 = useRef(null);
  const paper4 = useRef(null);

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
          [line1.current, line2.current],
          { opacity: 0, y: 120, transformStyle: "preserve-3d", ease: "Power3.inOut" },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            transformStyle: "preserve-3d",
            ease: "Power3.inOut",
            stagger: {
              amount: 0.3,
            },
          }
        )
        .fromTo(
          [paper1.current, paper2.current, paper3.current, paper4.current],
          { opacity: 0, y: 30, transformStyle: "preserve-3d", ease: "Power3.inOut" },
          { opacity: 1, y: 0, transformStyle: "preserve-3d", ease: "Power3.inOut", stagger: { amount: 0.3 }, delay: -0.3 }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="section section-two" ref={sectionRef}>
      <div className="container data-content">
        <div className="row gap-8">
          <div className="col col-2 w-60">
            <div className="sect-4-grid">
              <div className="sticky-paper" ref={paper1}>
                <img
                  src="https://odama.io/images/odama_LP_Artboard-1.png"
                  alt="illustration of a laptop"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Landing Page Design</h3>
              </div>
              <div className="sticky-paper" ref={paper2}>
                <img
                  src="https://odama.io/images/odama_LP_Artboard-2.png"
                  alt="illustration of a monitor"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Saas, POS, Dashboard</h3>
              </div>
              <div className="sticky-paper" ref={paper3}>
                <img
                  src="https://odama.io/images/odama_LP_Artboard-3.png"
                  alt="illustration of a 2D & 3D object"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">2D & 3D Illustration</h3>
              </div>
              <div className="sticky-paper" ref={paper4}>
                <img
                  src="https://odama.io/images/odama_LP_Artboard-4.png"
                  alt="illustration of a phone"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Mobile app Design</h3>
              </div>
            </div>
          </div>
          <div className="col col-2 w-45">
            <div className="title-wrapper">
              <div className="cropper-heading">
                <div className="text-wrapper" ref={line1}>
                  <h2>We don&apos;t copy</h2>
                </div>
              </div>
              <div className="cropper-heading">
                <div className="text-wrapper" ref={line2}>
                  <h2>We create</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
