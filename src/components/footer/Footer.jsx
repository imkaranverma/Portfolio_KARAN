import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Connect</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          {/* <a 
          data-aos="fade-up" data-aos-duration="1000"

            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a> */}
          {/* <a 
          data-aos="fade-up" data-aos-duration="1200"

            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a> */}
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://www.linkedin.com/in/imkaranverma"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkdIn</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/kaarrran/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://leetcode.com/iamkaranverma/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiLeetcode className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Leetcode</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; All rights reserved
          {/* | Copyright &copy; <span>2023 Dev AlphaSpace </span> All rights reserved */}
          <a href=""></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
