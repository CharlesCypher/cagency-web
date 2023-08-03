import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import React from "react";
import useMouse from "@react-hook/mouse-position";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const App = () => {
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  // const lenis = new Lenis();

  // lenis.on("scroll", ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });

  // gsap.ticker.lagSmoothing(0);

  const ref = React.useRef(null);
  const mouse = useMouse(ref, { leaveDelay: 30, enterDelay: 30 });
  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.x !== null) mouseXPosition = mouse.clientX;
  if (mouse.y !== null) mouseYPosition = mouse.clientY;
  const variants = {
    default: {
      opacity: 1,
      transformStyle: "preserve-3d",
      willChange: "transform",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.6,
      },
    },
  };
  return (
    <div className="cagency-page" ref={ref}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="custom-cursor-wrapper">
          <motion.div className="custom-cursor-body" variants={variants} animate={"default"}></motion.div>
        </div>
      </Router>
    </div>
  );
};

export default App;
