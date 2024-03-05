import React, { useRef , useState}from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import "../VanillaTilt";






// const ROTATION_RANGE = 32.5;
// const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Hero = () => {



  // const ref = useRef(null);

  // const [rotateX, setRotateX] = useState(0);
  // const [rotateY, setRotateY] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseMove = (e) => {
  //   if (!ref.current  || !isHovered) return;

  //   const rect = ref.current.getBoundingClientRect();

  //   const width = rect.width;
  //   const height = rect.height;

  //   const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
  //   const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

  //   const rY = mouseX / width - HALF_ROTATION_RANGE;
  //   const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

  //   setRotateX(rX);
  //   setRotateY(rY);
  // };

  // const handleMouseLeave = () => {
  //   if (!ref.current) return;
  //   setRotateX(0);
  //   setRotateY(0);
  //   setIsHovered(false);
  // };

  // const handleMouseMove = (e) => {
  //   console.log(e.target.getBoundingClientRect());
  // };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };


  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm KARAN VERMA
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Video Editor",
                2000,
                "Engineering Student",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Pre Final-year student at KIET Group of Institutions.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/imkaranverma"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/imkaranverma">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imkaranverma">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kaarrran/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              {/* <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
              {/* <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className="h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src='src\assets\Potrait.png'
              // src={mine}
              alt="mine"
            />
            {/* <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2"> */}
              {/* <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div> */}
            {/* </div> */}
          </div>
          {/* <div className="left-2 top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="line w-[1px] bg-gray-300 h-[1px] sm:w-[250px]">karan.engineer@gmail.com</div>
              </div> */}
        </div>
        
      </div>
    </div>
  );
};


export default Hero;
