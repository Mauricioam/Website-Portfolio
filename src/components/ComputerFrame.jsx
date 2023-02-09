import React from 'react';


function ComputerFrame({ frameImg, img}) {
  return (
  <div className='flex   lg:w-4/6'>
    <img className='lg:flex  lg:max-w-[52rem] lg:max-h-[52rem] hidden ' src={frameImg} alt="project with computer frame"/>
     <img className={`lg:flex lg:relative lg:right-[45.7rem] lg:top-[10.3rem] w-[39.3rem] h-[21.7rem] hidden object-cover`} src={img} alt="project with computer frame"/> 
 </div>
  )
}


export default ComputerFrame;

