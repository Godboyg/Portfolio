import React from 'react'

function ProjectCard(props : String) {

  const { title , decription , img } = props;

  return (
    <div className='p-4 rounded-md bg-gray-900 
     w-[90vw] sm:w-[50vw] flex flex-col sm:flex-row items-center justify-center text-white'>
      <div className="w-full sm:w-[50%] sm:h-[50vh] rounded-md bg-cyan-800 overflow-hidden">
        <img src={img} alt="" className='h-full w-full object-cover hover:scale-120
        hover:cursor-pointer transition-all duration-300 ease-in-out'/>
      </div>
      <div className="w-full sm:w-[50%] sm:h-[50vh] sm:p-3 text-center">
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='mt-3'>{decription}</p>
        <p className='mt-3'>Tech Stack</p>
        <div className="w-full mt-3 flex items-center justify-center">
          <div className="w-[50%] flex items-center justify-between">
            <span>Code</span>
          <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
