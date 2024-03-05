import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
<div className="flex  flex-wrap justify-around md:justify-evenly "  data-aos="fade-up" >
        <legend className="  mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              HTML&CSS
            </legend>
        <legend className="  mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              JavaScript
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              ReactJS
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              MongoDB
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              Express
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              NodeJS
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              SQL
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              Python
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              Git/GitHub
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              SASS
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              TailwindCSS
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              Figma
            </legend>
        <legend className=" mx-4 my-1 cursor-pointer border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              Ilustrator
            </legend>
        {/* <legend className=" mx-4 my-1  border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl md:text-xs md:px-4 md:py-1.5 hover:scale-110 text-yellow-500">
              TailwindCSS
            </legend> */}

 </div>




        <div className="flex mt-10 md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className="text-gray-700 font-medium w-[100%]"
            >
              FIELD OF EXPERTISE.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"Frontend"} value={90} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Backend"}
                  value={75}
                  />
                {/* <ProgressBar logo={<FaReact />} name={"Github"} value={80} /> */}
                <ProgressBar logo={<FaReact />} name={"Machine Learning"} value={70} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Data Science"}
                  value={55}
                  />
                  <ProgressBar logo={<IoLogoCss3 />} name={"DSA(C/C++)"} value={95} />
                 <ProgressBar logo={<FaReact />} name={"UI/UX Designing"} value={80} />
               {/* <ProgressBar logo={<FaReact />} name={"MondoDB"} value={89} />
                <ProgressBar logo={<FaReact />} name={"ExpressJS"} value={86} /> */}
              </div>
            </div>
          </div>
          {/* right box */}

          
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"black"}
                white={"white"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"white"}
                white={"black"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={
                  <GrCode/>
                }
                black={"black"}
                white={"white"}
                skill={"C++"}
              />
             
            </div>
          </div>

{/* <div className="right flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 text-2xl w-[100%]"
            >
              BACKEND.
            </p>
            
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<FaReact />} name={"Node JS"} value={82} />
                <ProgressBar logo={<FaReact />} name={"MondoDB"} value={96} />
                <ProgressBar logo={<FaReact />} name={"ExpressJS"} value={86} />
                <ProgressBar logo={<FaReact />} name={"SQL"} value={90} />
              </div>
          
            </div>
          </div> */}
        </div>


        <div className="flex mt-20 md:flex-col ">

       
        {/* <div className="right flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 text-2xl w-[100%]"
            >
              GRAPHICS DESIGNING.
            </p>
            
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<FaReact />} name={"Figma"} value={82} />
                <ProgressBar logo={<FaReact />} name={"Illustrator"} value={96} />
                <ProgressBar logo={<FaReact />} name={"UI/UX"} value={86} />
                <ProgressBar logo={<FaReact />} name={"Canva"} value={90} />
              </div>
          
            </div>
          </div> */}

          
          {/* <div className="right flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 text-2xl w-[100%]"
            >
              MISC.
            </p>
            
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<FaReact />} name={"Github"} value={82} />
                <ProgressBar logo={<FaReact />} name={"DSA(C/C++)"} value={96} />
                <ProgressBar logo={<FaReact />} name={"Adobe Premire Pro"} value={86} />
               
              </div>
          
            </div>
          </div> */}
          {/* right box */}
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
