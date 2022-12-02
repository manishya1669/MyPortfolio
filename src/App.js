import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Codingexp from "./components/Codingexp";
import Achievement from "./components/Achievement";


function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
  <>
  
   
    
   
        <Navbar />
    <div className="min-h-screen  px-3 sm:px-5 font-serif bg-gray-600 w-full">
    
      <div data-aos="fade-down" data-aos-duration="800">
       <Card/>
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <About />
      </div>
      <div data-aos="fade-right" data-aos-duration="800">
         <Achievement/>
      </div>
      
      <div data-aos="fade-left" data-aos-duration="800">
        <Skills />
      </div>
     
      <div data-aos="fade-right" data-aos-duration="800">
         <Codingexp/>
      </div>
      <div data-aos="fade-left" data-aos-duration="800">
         <Project/>
      </div>
     
      
      <div data-aos="fade-right" data-aos-duration="800">
        <Contact />
      </div>

      <Footer />
    </div>
    
    
    
    </>
  );
}

export default App;
