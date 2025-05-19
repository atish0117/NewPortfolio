import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import herobg4 from "./assets/herobg4.png";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="  bg-hero-pattern bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${herobg4})` }}
          >
            <Navbar />
            <Hero />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
