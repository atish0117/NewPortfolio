import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import herobg4 from "./assets/herobg4.png";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Tech from "./Components/Tech";
import Works from "./Components/Works";
import Feedbacks from "./Components/Feedbacks";
function App() {
  return (
    <>
      <BrowserRouter>
          <ParallaxProvider>
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
        </div>
            </ParallaxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
