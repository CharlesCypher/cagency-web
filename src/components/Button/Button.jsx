import "./Button.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Button = () => {
  const buttonWrapper = useRef(null);
  const btn = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(btn.current, { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0 });
    }, btn);

    buttonWrapper.current.addEventListener("mousemove", (e) => {
      const position = buttonWrapper.current.getBoundingClientRect();
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;

      buttonWrapper.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    buttonWrapper.current.addEventListener("mouseout", () => {
      buttonWrapper.current.style.transform = `translate(0px, 0px)`;
    });
    return () => ctx.revert();
  }, []);

  // JavaScript code

  useLayoutEffect(() => {}, []);

  return (
    <div className="button-cta-wrapper" ref={buttonWrapper}>
      <button className="button-cta bg-primary" aria-label="Let's Talk" ref={btn}>
        LET&apos;S TALK
      </button>
    </div>
  );
};

export default Button;
