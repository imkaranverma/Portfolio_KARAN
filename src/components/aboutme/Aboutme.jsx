import React from 'react'
import Plx from "react-plx";



// const parallaxData = [
//   {
//     start: self,
//     duration: ".containerPlex",
//     properties: [
//       {
//         startValue: 0.5,
//         endValue: 1,
//         property: "scale",
//       },
//     ],
//   },
// ];


const Aboutme = () => {
  return (
    // <Plx className='containerPlex' parallaxData={parallaxData}>
    <div className='container m-auto  mt-16' data-aos="fade-up">
      <div>
      {/* <h1 
      // data-aos="fade-up"
      className='my-10 text-5xl font-bold sm:text-[2rem] text-center'><b>Who am I?</b></h1> */}
      <h1 
      // data-aos="fade-up"
      className='text-3xl font-black text-gray-400 sm:text-2xl'><b>Who am I?</b></h1>

<span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
</div>

<div className='flex justify-between mx-8 mt-16 flex-auto'>
{/* <div className='md:hidden'>
  <img src='src\assets\Potrait.png'/>
  </div> */}

  <div className='ml-12 mt-16 my-10 text-xl md:text-sm md:ml-0 md:mt-0'>
      <p>Hello! I'm <b>Karan Verma</b>, a third-year Computer Science student diving into web development. With a keen interest in Data Science and ML, I'm on a mission to blend code with creativity.
<br/>
<br/>
This portfolio is my tech canvas, showcasing my evolving skills in web development and my passion for cutting-edge technologies. I'm not just seeking a job; I'm on the lookout for a company that values innovation as much as I do.
<br/>
<br/>
Join me on this journey through my portfolio, where curiosity meets code, and let's build something great together!</p>
</div>
</div>
    </div>
    // </Plx>
  )
}

export default Aboutme
