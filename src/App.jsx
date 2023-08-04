import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "./Hooks/useFollowPointer";
import Home from "./Pages/Home/Home";

const App = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div className="cagency-page" ref={ref}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="custom-cursor-wrapper">
          <motion.div
            className="custom-cursor-body"
            animate={{ x, y }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 25,
              restDelta: 0.001,
            }}
          ></motion.div>
        </div>
      </Router>
    </div>
  );
};

export default App;
