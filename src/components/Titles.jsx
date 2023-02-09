import React from 'react'
import UnderLine from '../assets/UnderLine'

function Titles({title}) {
  return (
    <div className=' flex flex-col items-center justify-center '>
    <h1 className=' lg:text-5xl text-3xl '>{title}</h1>
    <UnderLine/>
    </div>
  )
}

export default Titles