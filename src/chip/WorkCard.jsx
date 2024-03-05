import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import  arrow   from '../assets/arrow.svg';

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (

<>
    {/* <div className=' my-20 '> */}
    {/* <div className='flex flex-wrap gap-16 my-20 '> */}
    {reversedData.map((project) => {

      return (
        
        <div className="flex flex-wrap flex-col justify-center items-center  gap-4 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg" > 
      {/* <div className='lg:w-[400px] w-full ' key={project.name}> */}
        {/* <div className='block-container w-12 h-12'> */}
          {/* <div className={`btn-back rounded-xl ${project.theme}`} /> */}
          {/* <div className='btn-front rounded-xl flex justify-center items-center'> */}
            {/* <img
              src={project.iconUrl}
              alt='threads'
              className='w-1/2 h-1/2 object-contain'
            /> */}
          {/* </div> */}
        {/* </div> */}

        <div className='mt-5 flex flex-col h-[370px] w-[380px]'>
          <h4 className='text-2xl font-poppins font-semibold'>
            {project.name}
          </h4>
          <p className='mt-2 text-slate-500'>{project.description}</p>
          <div className='mt-5 flex items-center gap-2 font-poppins'>
            <Link
              to={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-blue-600'
              >
              Live Link
            </Link>
            <img
              src={arrow}
              alt='arrow'
              className='w-4 h-4 object-contain'
              />
          </div>
        </div>
      {/* </div> */}
      </div>
    )
  }
    )
  }
    {/* </div> */}
    
    </>
    
    

//     <>
//       {reversedData.map((data) => {
//         return (
//           <div
//             data-aos="zoom-in"
//             key={data.id}
//             className="flex flex-col justify-center items-center gap-4"
//           >
//             <POPUP className="img-content relative">
             
//             {/* <div className="relative h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
//   <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
//     <h2 className="text-2xl font-bold text-black">{data.title}</h2>
//     <p className="text-sm text-black">{data.desc}</p>
//   </div>
// </div> */}

//               <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
//                 <img
//                   src={data.img}
//                   alt={data.title}
//                   className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
//                 />
//               </div>

//               <div
//                 className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
//               >
//                 <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
//                   {data.desc}
//                 </p>
//                 <div className=" flex items-center justify-center gap-4">
//                   <Link
//                     to={data.link}
//                     target="_blank"
//                     className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
//                   >
//                     <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
//                     <p className=" text-black">Demo</p>
//                   </Link>
//                   <br className="w-[2px] bg-white" />
//                   <Link
//                     to={data.git}
//                     target="_blank"
//                     className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
//                   >
//                     <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
//                     <p className=" text-black">Code</p>
//                   </Link>
//                 </div>
//               </div>
//             </POPUP>
//             <p className="text-gray-800 text-xl font-medium sm:text-lg">
//               {data.title}
//             </p>
//           </div>
//         );
//       })}
//     </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
