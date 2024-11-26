import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Service";
import About from "./Components/About";
import Schedule from "./Components/Schedule";
import Contact from "./Components/Contact";

export default function App() {
   return (
    <div>
      <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Schedule/>
    <Contact/>
                 
    </div>
                 
              
         
   );
}
