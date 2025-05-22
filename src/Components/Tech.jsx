import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { motion } from "framer-motion";

// Better Animation Variant: Slide-up + fade + scale
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className='w-28 h-32 flex flex-col items-center group rounded-xl hover:shadow-lg hover:shadow-cyan-400/40 transition-shadow duration-500'
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Icon */}
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className='w-20 h-20 object-contain mb-2 transition-transform duration-500 group-hover:scale-110 hover:drop-shadow-[1px_0_1px_#53C1DE]'
            // style={{ filter: "drop-shadow(0 0 1px cyan)" }}
            whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
          />

          {/* Name */}
          <p className='text-white text-sm font-medium text-center tracking-wide opacity-50 group-hover:opacity-100 transition-opacity duration-300'>
            {technology.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");



// circle animation

// import React from "react";
// import { motion } from "framer-motion";
// import SectionWrapper from "../hoc/SectionWrapper";
// import { technologies } from "../constants";

// // Animation Variant: Scroll par ek-ek karke aaye
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30, scale: 0.8 },
//   show: (index) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: index * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const Tech = () => {
//   return (
//     <div className='flex flex-wrap justify-center gap-10'>
//       {technologies.map((tech, index) => (
//         <motion.div
//           key={tech.name}
//           custom={index}
//           variants={fadeInUp}
//           initial='hidden'
//           whileInView='show'
//           viewport={{ once: true, amount: 0.3 }}
//           className='w-28 h-32 flex flex-col items-center'
//         >
//           <div className='w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg flex items-center justify-center transform transition-transform duration-700 hover:rotate-[360deg] hover:scale-105'>
//             <img
//               src={tech.icon}
//               alt={tech.name}
//               className='w-12 h-12 object-contain'
//             />
//           </div>
//           <p className='mt-3 text-white text-sm font-medium text-center'>
//             {tech.name}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");


