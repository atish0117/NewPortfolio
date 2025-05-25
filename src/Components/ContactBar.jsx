import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const ContactBar = () => {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const socialLinks = [
    {
      href: "https://linkedin.com/in/atish-kumar-6856a42ba",
      Icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/atish0117",
      Icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://instagram.com",
      Icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://wa.me/9716436292",
      Icon: FaWhatsapp,
      label: "WhatsApp",
    },
  ];

  if (isMobile) {
    //  MOBILE VERSION: Fixed to right side, scrollable page
    return (
      <div className="fixed right-1 top-30 z-50 flex flex-col items-end gap-3">
        {/* Toggle Button (Profile Icon) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-12 h-12 rounded-full bg-[#45D4FF] text-white flex items-center justify-center shadow-lg"
        >
          <FaUserAlt size={20} />
        </button>

        {/* Expanded Social Icons */}
        {menuOpen &&
          socialLinks.map(({ href, Icon, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-cyan-500 text-[#45D4FF]  dark:text-cyan-500 hover:bg-[#45D4FF] hover:text-white flex items-center justify-center shadow-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
              title={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
      </div>
    );
  }

  // DESKTOP VERSION
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-5 rounded-3xl dark:bg-tertiary bg-transparent transition-colors duration-300">
      {/* Contact Button */}
      <motion.a
        href="#contact"
        whileHover={{
          scale: 1.07,
          boxShadow: "0px 0px 16px rgba(59, 130, 246, 0.6)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#45D4FF] text-white font-semibold text-sm overflow-hidden"
      >
        Contact me!
        <motion.span
          className="inline-block"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 4, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiArrowUpRight size={18} />
        </motion.span>
        <span className="absolute inset-0 rounded-full bg-blue-400 opacity-10 animate-ping pointer-events-none" />
      </motion.a>

      {/* Social Icons */}
      <div className="flex gap-4 md:gap-6 relative">
        {socialLinks.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 rounded-full border border-cyan-500 
              text-[#45D4FF] dark:text-cyan-500 flex items-center justify-center 
              hover:bg-[#45D4FF] hover:text-white transition-all duration-300 
              animate-pulse hover:animate-none"
          >
            <Icon
              className="transition-transform duration-500 group-hover:rotate-12"
              size={18}
            />
            <span
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                text-xs text-white dark:text-gray-200 bg-black dark:bg-gray-800 
                px-2 py-1 rounded opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 
                transition-all duration-300 origin-bottom"
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
