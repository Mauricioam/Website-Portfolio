import React from 'react';


function ComputerFrame({ frameImg, img, width, height, rigth, top}) {
  return (
    <div className='flex  md:w-4/6 '>
    <img className='md:flex  md:max-w-[52rem] md:max-h-[52rem] hidden ' src={frameImg} alt="project with computer frame"/>
     <img className={`md:flex md:relative md:right-[${rigth}rem] md:top-[${top}rem] w-[${width}rem] h-[${height}rem] hidden object-cover`} src={img} alt="project with computer frame"/> 
 </div>
  )
}


export default ComputerFrame;

