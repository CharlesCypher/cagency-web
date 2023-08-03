import { gsap } from "gsap";
import "./Ticker.css";
import { useEffect, useRef } from "react";

const Ticker = () => {
  const ticker = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(ticker.current, { opacity: 0 }, { duration: 1, opacity: 1 });
  }, []);
  return (
    <div className="text-running-box" ref={ticker}>
      <div className="text-running-wrapper">
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash">/</span>webflow<span className="slash">/</span> mobile app <span className="slash">/</span>branding
            <span className="slash">/</span>2d illustration <span className="slash">/</span>3d illustration<span className="slash">/</span> Animation
            <span className="slash">/</span> saas
            <span className="slash">/</span>webapp<span className="slash">/</span> graphic design<span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash">/</span>webflow<span className="slash">/</span> mobile app <span className="slash">/</span>branding
            <span className="slash">/</span>2d illustration <span className="slash">/</span>3d illustration<span className="slash">/</span> Animation
            <span className="slash">/</span> saas
            <span className="slash">/</span>webapp<span className="slash">/</span> graphic design<span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash">/</span>webflow<span className="slash">/</span> mobile app <span className="slash">/</span>branding
            <span className="slash">/</span>2d illustration <span className="slash">/</span>3d illustration<span className="slash">/</span> Animation
            <span className="slash">/</span> saas
            <span className="slash">/</span>webapp<span className="slash">/</span> graphic design<span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner">
          <h5 className="text-running text-black">
            landing page <span className="slash">/</span>webflow<span className="slash">/</span> mobile app <span className="slash">/</span>branding
            <span className="slash">/</span>2d illustration <span className="slash">/</span>3d illustration<span className="slash">/</span> Animation
            <span className="slash">/</span> saas
            <span className="slash">/</span>webapp<span className="slash">/</span> graphic design<span className="slash">/</span>
          </h5>
        </div>
      </div>
      <div className="text-running-wrapper mirror">
        <div className="text-running-inner mirror">
          <h5 className="text-running text-black">
            graphic design <span className="slash">/</span>webapp<span className="slash">/</span> saas <span className="slash">/</span>Animation
            <span className="slash">/</span>3d illustration <span className="slash">/</span>2d illustration<span className="slash">/</span> branding
            <span className="slash">/</span> mobile app <span className="slash">/</span>webflow<span className="slash">/</span> landing page
            <span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner mirror">
          <h5 className="text-running text-black">
            graphic design <span className="slash">/</span>webapp<span className="slash">/</span> saas <span className="slash">/</span>Animation
            <span className="slash">/</span>3d illustration <span className="slash">/</span>2d illustration<span className="slash">/</span> branding
            <span className="slash">/</span> mobile app <span className="slash">/</span>webflow<span className="slash">/</span> landing page
            <span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner mirror">
          <h5 className="text-running text-black">
            graphic design <span className="slash">/</span>webapp<span className="slash">/</span> saas <span className="slash">/</span>Animation
            <span className="slash">/</span>3d illustration <span className="slash">/</span>2d illustration<span className="slash">/</span> branding
            <span className="slash">/</span> mobile app <span className="slash">/</span>webflow<span className="slash">/</span> landing page
            <span className="slash">/</span>
          </h5>
        </div>
        <div className="text-running-inner mirror">
          <h5 className="text-running text-black">
            graphic design <span className="slash">/</span>webapp<span className="slash">/</span> saas <span className="slash">/</span>Animation
            <span className="slash">/</span>3d illustration <span className="slash">/</span>2d illustration<span className="slash">/</span> branding
            <span className="slash">/</span> mobile app <span className="slash">/</span>webflow<span className="slash">/</span> landing page
            <span className="slash">/</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
