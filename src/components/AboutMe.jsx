import React from 'react'

function AboutMe() {
  return (
    <div id='Get to know me!' className='flex flex-col gap-20 w-screen px-36 h-[33rem] pt-8'>
        <div className='flex justify-center'>
        <h1 className='text-3xl font bold'>About me</h1>
        </div>
        <div className='flex'>
        <div className='flex flex-col'>
            <h1 className='text-xl text-center pb-5'>About me</h1>
            <p className='text-lg'>Hi! Its very nice to meet you. I'm a pasionate React Front-End Developer</p>
            
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl text-center'>Current skills</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, possimus explicabo. Dolorum est debitis nihil consectetur ab doloribus pariatur perferendis, quaerat, eum aut voluptates sed hic deleniti atque, aliquam enim!</p>
            
        </div>
        </div>

    </div>
  )
}

export default AboutMe;