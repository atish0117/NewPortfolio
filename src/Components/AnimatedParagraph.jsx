import { motion } from "framer-motion";

const AnimatedParagraph = () => {
  const lines = [
    <>Welcome to my portfolio!</>,
    <>
      I'm an{" "}
      <span className="text-[#45D4FF] font-semibold">engineer by skill</span> and a{" "}
      <span className="text-[#45D4FF] font-semibold">creator by passion</span>.
    </>,
    <>
      As a{" "}
      <span className="font-semibold text-white">Full-Stack Web Developer</span>, I specialize in turning <br /> ideas into responsive, intuitive, and visually stunning web experiences.
    </>,
    <>
      With a keen eye for detail and a love for clean code, <br /> I craft digital products that are as{" "}
      <span className="text-[#45D4FF] font-semibold">functional</span> as they are{" "}
      <span className="text-[#45D4FF] font-semibold">beautiful</span>.
    </>,
    <>
      <span className="font-bold text-white">Let’s collaborate and build something exceptional.</span>
    </>,
  ];

  return (
    <div className="text-lg sm:text-xl mt-4 text-white leading-relaxed max-w-3xl">
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4 + index * 0.5,
            duration: 1.5,
            type: "spring",
            stiffness: 50,
          }}
          className="mb-2"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default AnimatedParagraph;
