import React from 'react';
import Titles from './Titles';
import { techStack } from '../utils/techStack';
import { aboutMe } from '../utils/aboutMe';
import MailTo from './MailTo';
import ButtonAboutMe from './ButtonAboutMe';

 export const techStackStyles = " bg-sky text-lg font-bold border px-3 py-2 rounded-md"

function AboutMe() {

  

  return (
    <section id='Get to know me!' className='flex flex-col gap-20 mt-9 mb-9 mx-0 lg:mx-20'>
       <Titles title="About Me"/>
        <div className='flex flex-col md:flex-row   '>
        <div className='flex flex-col items-center md:w-[95%] w-screen'>
            <h1 className='text-3xl text-center font-bold pb-5'>{aboutMe.title}</h1>
            <p className='text-2xl text-left text-gray-600 px-12 py-12 leading-9 '>{aboutMe.description}</p>
              <MailTo>
              <button className='text-xl mb-7  rounded-md md:p-5 p-3 bg-secondary hover:bg-gray1 transition-all text-slate-100 '>Send me a message</button>
              </MailTo>
        </div>
        <div className='flex flex-col w-screen   '>
            <h1 className='text-3xl font-bold text-center'>Skills</h1>
            <div className='flex gap-2 flex-wrap px-12 py-20  justify-center'>
              {techStack.map((item,i)=>( <ButtonAboutMe key={i} item={item} />))}
            </div>
        </div> 
        </div> 

    </section>
  )
} 

export default AboutMe;