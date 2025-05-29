import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { styles } from "../Styles";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import sideImg from "../assets/sideImg.png"
import AnimatedParagraph from "./AnimatedParagraph";
import ContactBar from "./ContactBar";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      {/* line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#45D4FF]" />
          <div className="w-1 sm:h-96 h-80 blue-gradient" />
        </div>

          {/* left part */}
        <div className="flex flex-col justify-center ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#45D4FF]">Atish</span>
          </h1>
            <AnimatedParagraph />

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
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

<div className="w-1/2 flex justify-center items-center">
  <div className="relative w-80 h-80 rounded-full flex overflow-hidden items-center justify-center group">
    
    {/* Glowing Pulsating Halo */}
    <div className="absolute inset-0 rounded-full bg-[#00FFD5] opacity-30 blur-2xl animate-pulse z-0"></div>
    
    {/* Rotating Gradient Ring */}
    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00FFD5] border-b-[#00FFF0]  animate-spin-slow z-30"></div>

    {/* Avatar Image */}
    <div className="w-[288px] h-[288px] rounded-7xl  overflow-hidden relative z-20 border-2 border-white shadow-xl">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZxmtr6vrB1BwgDHDPUD-f54TNTnwLFEP-Q&s"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>


    <div className="absolute bottom-5 right-5 md:bottom-30 md:right-20 z-0  ">
    <ContactBar />
  </div>
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
