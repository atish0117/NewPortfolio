import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { styles } from "../Styles";
// import { ComputersCanvas } from "./canvas";
import AnimatedParagraph from "./AnimatedParagraph";
import ContactBar from "./ContactBar";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
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
            <AnimatedParagraph />
        </div>
      </div>

      

    <div className="absolute bottom-5 right-5 md:bottom-30 md:right-20 z-50">
    <ContactBar />
  </div>
    

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
