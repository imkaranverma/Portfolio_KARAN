import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import Aboutme from "../components/aboutme/Aboutme";
import { Parallax } from 'react-parallax';
// import Project from 'project.png';
// import projectImage from '../assets/Project.png';
import PageScrollProgressBar from "react-page-scroll-progress-bar";

import { useRef } from 'react';
const Home = () => {
  const containerRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>

<NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <PageScrollProgressBar
        container={containerRef.current}
        color="orange"
        bgColor="#f2f2f2"
        height="2px"
      />

{/* <Parallax strength={300} bgImage={projectImage}> */}
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
{/* </Parallax> */}

{/* <Parallax strength={300}> */}
      
      <Aboutme/>
{/* </Parallax> */}
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
