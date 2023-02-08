import React from 'react';
import UnderLine from '../assets/UnderLine';
import Titles from './Titles';

const techStack = ["HTML","CSS","JavaScript","React.js","Redux","Tailwind","Bootstrap5","Node.js","Express","PostreSQL"]
const techStackStyles = "text-lg font-bold border p-2 rounded-lg bg-primary shadow-lg"

function AboutMe() {
  return (
    <div id='Get to know me!' className='flex flex-col gap-20 h-[33rem] pt-8 mx-20'>
       <Titles title="About Me"/>
        <div className='flex flex-col md:flex-row  '>
        <div className='flex flex-col md:w-5/6 '>
            <h1 className='text-3xl text-center font-bold pb-5'> A little bit of me</h1>
            <p className='text-xl text-justify text-gray-600 px-12 py-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus fuga alias similique totam minus, ab quo, obcaecati vitae error quae. Iusto sint dignissimos aperiam voluptas vel eveniet sunt architecto.</p>
            
        </div>
        <div className='flex flex-col  '>
            <h1 className='text-3xl font-bold  text-center'>Current skills</h1>
            <div className='flex gap-2 flex-wrap px-12 py-12 justify-center'>
             {techStack.map((item,i)=>(<span  key={i} className={techStackStyles}>{item}</span>))}
            </div>
            
        </div> 
        </div> 

    </div>
  )
} 

export default AboutMe;