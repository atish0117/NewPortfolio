import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

// Animation variant
const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className='w-28 h-32 flex flex-col items-center group'
          variants={fadeInVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Icon */}
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110'
          />

          {/* Name (visible below icon or on hover) */}
          <p className='mt-2 text-center text-white text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
            {technology.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
