import React, { useState } from 'react';
import  image from "../assets/light-background.svg";
import CvIcon from '../assets/CvIcon';
import GithubIcon from '../assets/GithubIcon';
import LinkedInIcon from '../assets/LinkedIn-icon';
import ArrowDown from '../assets/ArrowDown';




function Welcome() {

  const [onMouseEffect,setOnMouseEffect] = useState(false);

 
  
  
  return (
    <div id='Home' className='w-screen flex flex-col' style={{backgroundImage:`url(${image})`}}>
    <div className=' flex items-center lg:h-[30rem] h-[25rem] w-screen    ' >
        <div className=' lg:flex lg:flex-col lg:gap-8 lg:p-5 hidden '>
           <LinkedInIcon  />
            <GithubIcon hpx={"60px"} wpx={"60px"}/>
            <CvIcon hpx={"60px"} wpx={"60px"}/>
        </div>
        <div className='lg:flex lg:flex-col lg:gap-16 flex flex-col gap-8 m-auto  '>
          <div className='flex justify-center'>
          <p onMouseEnter={()=>setOnMouseEffect(true)} className={` z-0 hover:cursor-loading relative text-gray1 md:text-7xl sm:px-0  sm:text-4xl text-2xl font-bold before:content-["MAURICIO/MURDOCH"] before:text-sky before:absolute ${onMouseEffect && "before:-translate-x-2 before:-translate-y-2"} before:transition-transform before:duration-300  }`}>MAURICIO/MURDOCH</p>
          
          </div>
        <h1 className='md:text-5xl sm:text-3xl text-2xl text-sky font-extrabold'>Frontend Developer</h1>
        <div className='flex justify-center md:flex md:justify-start'>
        <a href={"https://drive.google.com/file/d/1EYgkb4UNAcunKJCyqJ23BMqMLcmp2Ssb/view?usp=share_link"} target="_blank">
        <button className='text-xl  rounded-md md:p-5 p-3 bg-key_black hover:bg-dark_shade transition-all text-sky '>Download Resume</button>
        </a>
        </div>
        </div>
       
    </div>
        <span className='inline-flex justify-center'><ArrowDown/></span>
    </div>
  )
}

export default Welcome;