import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import herobg4 from "./assets/herobg4.webp";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Tech from "./Components/Tech";
import Works from "./Components/Works";
import Feedbacks from "./Components/Feedbacks";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <BrowserRouter>
          <ParallaxProvider>
               <Toaster position="top-center" reverseOrder={false} />
        <div className="relative z-0 bg-primary">
          <div className=" bg-fixed bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${herobg4})` }}>
           <Navbar />
            <Hero />
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <Contact/>
        </div>
            </ParallaxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
