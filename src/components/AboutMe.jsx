import React from 'react';

const techStack = ["HTML","CSS","JavaScript","React.js","Redux","Tailwind","Bootstrap5","Node.js","Express","PostreSQL"]
const techStackStyles = "text-lg font-bold border p-2 rounded-lg bg-primary shadow-lg"

function AboutMe() {
  return (
    <div id='Get to know me!' className='flex flex-col gap-20 w-screen px-36 h-[33rem] pt-8'>
        <h1 className=' text-5xl  text-center'>About me</h1>
        <div className='flex flex-col md:flex-row gap-20'>
        <div className='flex flex-col'>
            <h1 className='text-3xl text-center pb-5'>About me</h1>
            <p className='text-xl'>Hi! Its very nice to meet you. I'm a pasionate React Front-End Developer</p>
            
        </div>
        <div className='flex flex-col '>
            <h1 className='text-3xl  text-center'>Current skills</h1>
            <div className='flex gap-2 flex-wrap p-12 '>
             {techStack.map((item,i)=>(<span  key={i} className={techStackStyles}>{item}</span>))}
            </div>
            
        </div>
        </div>

    </div>
  )
}

export default AboutMe;