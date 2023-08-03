import "./Button.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Button = () => {
  const btn = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(btn.current, { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0 });
  }, []);
  return (
    <button className="button-cta bg-primary" aria-label="Dive In" ref={btn}>
      LET&apos;S TALK
    </button>
  );
};

export default Button;
