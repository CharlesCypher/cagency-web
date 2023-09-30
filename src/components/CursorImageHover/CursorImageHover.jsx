// import { useRef } from "react";
// import { gsap } from "gsap";
import "./CursorImageHover.css";

// const CursorImageHover = () => {
//   const cursorRef = useRef(null);

//   // Function to handle mouse move
//   const handleMouseMove = (e) => {
//     gsap.to(cursorRef.current, {
//       x: e.clientX,
//       y: e.clientY,
//       duration: 0.2,
//     });
//   };

//   // Function to show cursor image on text hover
//   const handleTextHover = () => {
//     // Change cursor image to your desired image URL
//     gsap.set(cursorRef.current, {
//       opacity: 1,
//       backgroundImage: "url(https://uploads-ssl.webflow.com/63116a2c2e256f544530a58f/63315273199d5ea87deeb637_1.png)",
//       ease: "Power3.inOut",
//       duration: 1.3,
//     });
//   };

//   // Function to reset cursor to default on text mouse out
//   const handleTextMouseOut = () => {
//     gsap.set(cursorRef.current, {
//       opacity: 0,
//       backgroundImage: "none",
//       ease: "Power3.inOut",
//       duration: 1.3,
//     });
//   };

//   return (
//     <div className="cursor-container" onMouseMove={handleMouseMove}>
//       <div className="section hover-text">
//         <h1 onMouseEnter={handleTextHover} onMouseLeave={handleTextMouseOut}>
//           Hover over this text
//         </h1>
//       </div>
//       <div className="custom-cursor" ref={cursorRef}></div>
//     </div>
//   );
// };

// export default CursorImageHover;
// import { useState } from "react";
// import { motion } from "framer-motion";

// const CursorImageHover = () => {
//   const [hovered, setHovered] = useState(false);

//   const handleHoverStart = () => {
//     setHovered(true);
//   };

//   const handleHoverEnd = () => {
//     setHovered(false);
//   };

//   const cursorVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//     },
//   };

//   const cursorImage = hovered ? "url(https://uploads-ssl.webflow.com/63116a2c2e256f544530a58f/63315273199d5ea87deeb637_1.png), auto" : "auto";

//   return (
//     <div>
//       <motion.div
//         className="custom-cursor"
//         variants={cursorVariants}
//         initial="hidden"
//         animate={hovered ? "visible" : "hidden"}
//         style={{
//           cursor: cursorImage,
//           position: "fixed",
//           top: 0,
//           left: 0,
//           pointerEvents: "none", // Ensure the cursor doesn't affect interactions
//         }}
//       ></motion.div>
//       <div className="section">
//         <h1 className="text-container" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
//           Hover over this text
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default CursorImageHover;

// import { motion } from "framer-motion";

// const CursorImageHover = () => {
//   return (
//     <section className="section container">
//       <motion.h1
//         className="text"
//         whileHover={{ scale: 1.1 }} // Animation on text hover
//       >
//         Hover over me
//       </motion.h1>
//       <motion.div
//         className="image-container"
//         initial={{ opacity: 0, scale: 0.5 }} // Initial animation values
//         animate={{ opacity: 1, scale: 1 }} // Animation on text hover
//         exit={{ opacity: 0, scale: 0.5 }} // Animation when image is hidden
//       >
//         <img
//           src="https://uploads-ssl.webflow.com/63116a2c2e256f544530a58f/63315273199d5ea87deeb637_1.png"
//           alt="Hovered Image"
//           className="hover-image"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default CursorImageHover;\

// import { useState } from "react";
// import { motion } from "framer-motion";

// const CursorImageHover = () => {
//   const [hovered, setHovered] = useState(false);

//   const handleHoverStart = () => {
//     setHovered(true);
//   };

//   const handleHoverEnd = () => {
//     setHovered(false);
//   };
//   const imageVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="section container">
//       <motion.div className="text-container" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
//         Hover over this text
//         <motion.div className="image-overlay" variants={imageVariants} initial="hidden" animate={hovered ? "visible" : "hidden"}>
//           <img src="https://uploads-ssl.webflow.com/63116a2c2e256f544530a58f/63315273199d5ea87deeb637_1.png" alt="Hover Image" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default CursorImageHover;
