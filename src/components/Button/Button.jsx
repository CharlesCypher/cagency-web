import "./Button.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Button = () => {
  const btn = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(btn.current, { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0 });
    }, btn);
    return () => ctx.revert();
  }, []);
  return (
    <button className="button-cta bg-primary" aria-label="Let's Talk" ref={btn}>
      LET&apos;S TALK
    </button>
  );
};

export default Button;
