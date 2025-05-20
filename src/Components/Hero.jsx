import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { styles } from "../Styles";
// import { ComputersCanvas } from "./canvas";
import AnimatedParagraph from "./AnimatedParagraph";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#45D4FF]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#45D4FF]">Atish</span>
          </h1>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}> */}
            <AnimatedParagraph />

            {/* <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-lg sm:text-xl mt-4 text-white leading-relaxed max-w-3xl"
            >
              Welcome to my portfolio! <br className="sm:block hidden" />
              I'm an{" "}
              <span className="text-[#45D4FF] font-semibold">
                engineer by skill
              </span>{" "}
              and a{" "}
              <span className="text-[#45D4FF] font-semibold">
                creator by passion
              </span>
              . <br className="sm:block hidden" />
              As a{" "}
              <span className="font-semibold text-white">
                Full-Stack Web Developer
              </span>
              , I specialize in turning ideas into responsive, intuitive, and
              visually stunning web experiences.{" "}
              <br className="sm:block hidden" />
              With a keen eye for detail and a love for clean code, I craft
              digital products that are as{" "}
              <span className="text-[#45D4FF] font-semibold">
                functional
              </span>{" "}
              as they are{" "}
              <span className="text-[#45D4FF] font-semibold">beautiful</span>.{" "}
              <br className="sm:block hidden" />
              <span className="font-bold text-white">
                Let’s collaborate and build something exceptional.
              </span>
            </motion.p> */}
          {/* </p> */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[72px] h-[72px] rounded-md border-4 border-secondary flex justify-center items-center relative">
            {/* Dot 1: Left to Right (horizontal movement) */}
            <motion.div
              animate={{
                x: [-20, 20, -20], // move left to right from center
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  "
            />

            {/* Dot 2: Top to Bottom (vertical movement) */}
            <motion.div
              animate={{
                y: [-20, 20, -20], // move top to bottom from center
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.9, // optional: add delay for alternate effect
              }}
              className="w-3 h-3 rounded-full bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
