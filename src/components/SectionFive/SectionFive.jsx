import "./SectionFive.css";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFollowPointer } from "../../Hooks/useFollowPointer";

const SectionFive = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const line1 = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85% ",
            end: "+=500",
            once: true,
          },
        })
        .fromTo(
          line1.current,
          { opacity: 0, ease: "Power3.inOut" },
          {
            duration: 1.2,
            opacity: 1,
            ease: "Power3.inOut",
          }
        );
    });
    return () => ctx.revert();
  }, []);

  const { x, y } = useFollowPointer(ref);

  //   const [cursorVariant, setCursorVariant] = useState("default");
  //   const mouse = useMouse(ref, { leaveDelay: 0, enterDelay: 0 });
  //   let mouseXPosition = 0;
  //   let mouseYPosition = 0;
  //   if (mouse.x !== null) mouseXPosition = mouse.clientX;
  //   if (mouse.y !== null) mouseYPosition = mouse.clientY;
  // const variants = {
  //   // default: {
  //   //   transformStyle: "preserve-3d",
  //   //   willChange: "transform, opacity",
  //   //   x: mouseXPosition,
  //   //   y: mouseYPosition,
  //   // },
  //   // sectionEnter: {
  //   //   opacity: 1,
  //   //   transformStyle: "preserve-3d",
  //   //   willChange: "transform, opacity",
  //   //   x: mouseXPosition - 100,
  //   //   y: mouseYPosition - 100,
  //   // },
  // };
  const handleOnEnter = () => {
    const cursor = document.querySelector(".custom-cursor-wrapper");
    cursor?.classList.add("d-none");
  };

  const handleOnLeave = () => {
    const cursor = document.querySelector(".custom-cursor-wrapper");
    cursor?.classList.remove("d-none");
  };
  return (
    <section ref={ref} className="section bg-primary relative orange" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
      <Link to="/" className="cursor-wrapper orange">
        <motion.div className="cursor" animate={{ x, y }}>
          <h4 className="text-black txt-center">
            Let&apos;s <br />
            Talk
          </h4>
        </motion.div>
      </Link>
      <div className="container">
        <div className="text-wrapper sect-5" ref={line1}>
          <h1 className="section-title text-black">
            the doors will ALWAYS BE opened to those who are bold enough to knock. WHAT ARE YOu waiting for, tuck in!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
