import React, { useEffect, useState } from 'react';
import  image from "../assets/light-background.svg";
import cursor from "../assets/cursor-click.svg";
import CvIcon from '../assets/CvIcon';
import GithubIcon from '../assets/GithubIcon';
import LinkedInIcon from '../assets/LinkedIn-icon';
import ArrowDown from '../assets/ArrowDown';



function Welcome() {


  const [textEffect, setTextEffect] = useState(false)
  
  return (
    <div id='Home' className='w-screen flex flex-col ' style={{backgroundImage:`url(${image})`}}>
    <div className=' flex items-center min-h-[29rem]  ' >
        <div className=' lg:flex lg:flex-col lg:gap-5 lg:p-5 hidden '>
           <LinkedInIcon />
            <GithubIcon/>
            <CvIcon/>
        </div>
        <div className='lg:flex lg:flex-col lg:gap-7 flex flex-col gap-8 m-auto '>
          <div className='flex'>
          <button onClick={()=>setTextEffect(!textEffect)} className={` z-0 hover:cursor-loading relative text-secondary lg:text-7xl text-2xl font-bold before:content-["MAURICIO/MURDOCH"] before:text-error before:absolute ${textEffect ? "before:bottom-2 before:right-2" : ""}`}>MAURICIO/MURDOCH</button>
          
          </div>
        <h1 className='md:text-4xl text-xl  text-secondary font-extrabold'>Front-End React Developer</h1>
        <div className='flex justify-center md:flex md:justify-start'>
       
        <button className=' rounded-md p-3 bg-secondary hover:bg-primary transition-all '>Download CV</button>
      
        </div>
        </div>
       
    </div>
        <span className='inline-flex justify-center'><ArrowDown/></span>
    </div>
  )
}

export default Welcome;