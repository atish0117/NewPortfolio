import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { styles } from "../Styles";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import AnimatedParagraph from "./AnimatedParagraph";
import ContactBar from "./ContactBar";
const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen flex flex-col justify-center items-center mx-auto overflow-hidden`}>
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-center justify-between gap-5 pt-30 md:pt-0`}
      >
      {/* line */}
        <div className="hidden md:flex  flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#45D4FF]" />
          <div className="w-1 sm:h-96 h-80 blue-gradient" />
        </div>

          {/* left part */}
        <div className=" flex-1 flex flex-col justify-center items-start text-left w-full  ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#45D4FF]">Atish</span>
          </h1>
            <AnimatedParagraph />

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
  {/* View Resume */}
  <a
        href="/public/webDeveloperResume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 flex items-center gap-2 bg-[#45D4FF] text-black rounded-lg shadow hover:bg-sky-400 transition"
  >
    <FaFilePdf className="text-white" />
    <span>View Resume</span>
  </a>

  {/* Download Resume */}
  <a
    href="/public/webDeveloperResume.pdf"
    download
    className="px-4 py-2 flex items-center gap-2 bg-green-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
  >
    <FaDownload className="text-white" />
    <span> Resume</span>
  </a>


</div>

</div>

<div className="relative w-full md:w-2/5 sm:h-[350px] h-[400px] flex items-end group">
  {/* Image Card */}
  <div className="relative w-full h-[90%] bg-[#45D4FF]/20 border-none border-white/10 rounded-t-3xl overflow-visible shadow-lg z-10 backdrop-blur-sm">
    <img
      src="/heroimg.webp"
      alt="My Work"
      className="absolute -top-20 w-full h-[calc(100%+80px)] object-contain object-[center_bottom] transition-transform duration-700"
    />

    {/* Gradient overlay */}
    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-tertiary/80 to-transparent pointer-events-none"></div>

    {/* Decorative dots */}
    <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-cyan-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
    <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

    {/* ✅ Social icons aligned inside bottom-right corner */}
    <div className="absolute -bottom-30 -right-0.3 z-20">
      <ContactBar />
    </div>
  </div>

  {/* Outer glow */}
  <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-500 -z-10"></div>
</div>






    </div>

              <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
        <a href="#about" aria-label="Go to about section">
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
