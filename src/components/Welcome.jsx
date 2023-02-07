import React, { useEffect, useState } from 'react';
import  image from "../assets/light-background.svg";
import CvIcon from '../assets/CvIcon';
import GithubIcon from '../assets/GithubIcon';
import LinkedInIcon from '../assets/LinkedIn-icon';
import ArrowDown from '../assets/ArrowDown';



function Welcome() {


  const [textEffect, setTextEffect] = useState(false)
  
    function getTitleLayer(phrase){
      let replaceSpace = phrase.replace(" ","/")
      let arrayLetters = replaceSpace.split("");
      return arrayLetters;
    }




  


  return (
    <div className='w-screen flex flex-col ' style={{backgroundImage:`url(${image})`}}>
    <div className=' flex items-center min-h-[28rem] gap-24 -md:justify-center' >
        <div className=' flex flex-col gap-5 p-5 -md:hidden'>
           <LinkedInIcon />
            <GithubIcon/>
            <CvIcon/>
        </div>
        <div className='flex flex-col gap-8 justify-center  -md:text-center'>
          <div className='flex'>
          {getTitleLayer("MAURICIO MURDOCH").map((item,i)=>(<button onClick={()=>setTextEffect(!textEffect)} className={`relative text-secondary m-1 text-7xl font-bold before:content-["${item}"] before:text-error before:absolute ${textEffect ? "before:bottom-2 before:right-2" : ""} `} key={i}>{item}</button>))}
          </div>
        {/* <h1 className='text-7xl text-black  font-bold'>Hi! I'm Mauricio Murdoch</h1> */}
        <h1 className='text-4xl  text-secondary font-extrabold'>Front-End React Developer</h1>
        <div className='-md:justify-center flex'>
       
        <button className=' rounded-md p-3 bg-secondary hover:bg-primary '>Download CV</button>
      
        </div>
        </div>
       
        
    </div>
        <button className='inline-flex justify-center'><ArrowDown/></button>
    </div>
  )
}

export default Welcome;