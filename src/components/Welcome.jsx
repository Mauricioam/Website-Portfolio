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
    <div className=' flex items-center lg:h-[30rem] h-[25rem] w-screen px-20   ' >
        <div className=' lg:flex lg:flex-col lg:gap-8 lg:p-5 hidden '>
           <LinkedInIcon  />
            <GithubIcon hpx={"60px"} wpx={"60px"}/>
            <CvIcon hpx={"60px"} wpx={"60px"}/>
        </div>
        <div className='lg:flex lg:flex-col lg:gap-16 flex flex-col gap-8 m-auto  '>
          <div className='flex justify-center'>
          <button onMouseEnter={()=>setOnMouseEffect(true)} className={` z-0 hover:cursor-loading relative text-secondary sm:text-7xl sm:px-0  text-2xl font-bold before:content-["MAURICIO/MURDOCH"] before:text-error before:absolute ${onMouseEffect && "before:-translate-x-2 before:-translate-y-2"}  }`}>MAURICIO/MURDOCH</button>
          
          </div>
        <h1 className='sm:text-5xl text-xl  text-secondary font-extrabold'>Front-End React Developer</h1>
        <div className='flex justify-center md:flex md:justify-start'>
       
        <button className='text-xl  rounded-md md:p-5 p-3 bg-secondary hover:bg-primary transition-all text-slate-300 '>Download CV</button>
      
        </div>
        </div>
       
    </div>
        <span className='inline-flex justify-center'><ArrowDown/></span>
    </div>
  )
}

export default Welcome;