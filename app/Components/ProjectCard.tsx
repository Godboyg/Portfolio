import React from 'react'

function ProjectCard(props : { title : string , description : string , img : string , link : string , code : string , tech : string}) {

  return (
    <div className='p-4 rounded-md bg-gray-900 
     w-[90vw] sm:w-[50vw] flex flex-col sm:flex-row items-center justify-center text-white'>
      <div className="w-full sm:w-[50%] sm:h-[50vh] rounded-md bg-cyan-800 overflow-hidden">
        <img src={props.img} alt="" className='h-full w-full object-cover hover:scale-120
        hover:cursor-pointer transition-all duration-300 ease-in-out'/>
      </div>
      <div className="w-full sm:w-[50%] sm:h-[50vh] sm:p-3 text-center">
        <h1 className='font-bold text-xl bg-gradient-to-r from-purple-500 to-blue-900 bg-clip-text text-transparent'>{props.title}</h1>
        <p className='mt-3'>{props.description}</p>
        <p className='mt-3 text-cyan-600 font-bold'>{props.tech}</p>
        <div className="w-full mt-3 flex items-center justify-center">
          <div className="w-[50%] flex items-center justify-between">
            <a href={props.code} target='_blank' className='text-cyan-400 text-xl font-semibold'>
              Code
            </a>
            <a href={props.link} target='_blank' className='text-cyan-400 text-xl font-semibold'>
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
