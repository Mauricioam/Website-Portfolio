import React from 'react'

function ProjectTitles({ title, href, description , github }) {
  return (
    <div className='flex flex-col'>
    <a class='group transition-all duration-300 ease-in-out text-center text-3xl' target="_blank" href={href}>
    <span class='bg-left-bottom bg-gradient-to-r from-blue-900 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
     {title}
    </span>
    </a>
    <div className='flex flex-col  p-12 justify-center'>
        <p className='text-xl text-justify'>
        {description}
        </p>
        <div className='mt-10 flex md:justify-start justify-center'>
        <a href={github} target="_blank" className=' hover:cursor-loading text-xl  rounded-xl md:px-10 py-5 px-6 bg-secondary hover:bg-primary transition-all text-slate-300'>GitHub</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectTitles;