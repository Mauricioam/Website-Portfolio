import React from 'react';
import { techStackStyles } from './AboutMe';

function ProjectTitles({ title, href, description , github, keyword }) {
  console.log(keyword);
  return (
    <div className='flex flex-col'>
    <a class=' group transition-all duration-300 ease-in-out text-center text-3xl' target="_blank" href={href}>
    <span class=' group-hover:text-slate-400 bg-left-bottom bg-gradient-to-r from-blue-900 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
     {title}
    </span>
    </a>
    <div className='flex flex-col  p-12 justify-center'>
        <p className='text-xl text-justify pb-5'>
        {description}
        </p>
        <p className='text-xl font-bold'>Keywords: <div className='flex gap-2 flex-wrap items-center'> {keyword?.map((item,i)=>(<span  key={i} className={techStackStyles}>{item}</span>))}</div></p>
        <div className='mt-10 flex md:justify-start gap-3 justify-center'>
        <a href={github} target="_blank" className=' hover:cursor-loading text-xl  rounded-xl md:px-10 py-5 px-6 bg-secondary hover:bg-primary transition-all text-slate-300'>GitHub</a>
        <a href={href} target="_blank" className='flex xl:hidden hover:cursor-loading text-xl  rounded-xl md:px-10 py-5 px-6 bg-secondary hover:bg-primary transition-all text-slate-300'>Demo</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectTitles;