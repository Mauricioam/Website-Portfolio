import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col w-screen px-36 h-[33rem] pt-8'>
    <div className='flex justify-center'>
    <h1 className='text-3xl font bold'>Projects</h1>
    </div>
    <div className='flex justify-center gap-28 pt-7'>
        <div>
            Imagen
        </div>
        <div className='flex flex-col'>
        <h1>Name project</h1>
        <button>Button</button>
        </div>
    </div>

</div>
  )
}

export default Projects;