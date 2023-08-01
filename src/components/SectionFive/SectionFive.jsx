import "./SectionFive.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

const SectionFive = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = React.useRef(null);
  const mouse = useMouse(ref, { leaveDelay: 0, enterDelay: 0 });
  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.x !== null) mouseXPosition = mouse.clientX;
  if (mouse.y !== null) mouseYPosition = mouse.clientY;
  const variants = {
    default: {
      transformStyle: "preserve-3d",
      willChange: "transform, opacity",
      x: mouseXPosition - 50,
      y: mouseYPosition - 50,
    },

    sectionEnter: {
      opacity: 1,
      transformStyle: "preserve-3d",
      willChange: "transform, opacity",
      x: mouseXPosition - 100,
      y: mouseYPosition - 100,
    },
  };
  const handleOnEnter = () => {
    setCursorVariant("sectionEnter");
  };

  const handleOnLeave = () => {
    setCursorVariant("default");
  };
  return (
    <section ref={ref} className="section bg-primary relative orange" onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
      <Link to="/" className="cursor-wrapper orange">
        <motion.div className="cursor" variants={variants} animate={cursorVariant}>
          <h4 className="text-black">
            Let&apos;s <br />
            Talk
          </h4>
        </motion.div>
      </Link>
      <div className="container data-content">
        <div className="text-wrapper sect-5">
          <h1 className="section-title text-black">
            the doors will ALWAYS BE opened to those who are bold enough to knock. WHAT ARE YOu waiting for, tuck in!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
