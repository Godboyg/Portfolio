import React from 'react'
import Image from 'next/image';

function Card({ h , img , d , tech , url}) {
  return (
    <div className="text-white relative h-[97vh] rounded-md w-[28vw] max-sm:w-[40vw] max-sm:h-[70vh] bg-black p-4">
      <div className="">
        <div className="h-[40vh] max-sm:h-[25vh] w-full rounded-md overflow-hidden">
            <Image
             src={img}
             className='h-full w-full object-cover transition-all transform duration-400 ease-in-out hover:cursor-pointer hover:scale-105'
            placeholder='blur'
            />
        </div>
        <div className="mt-5">
        <a href={url} target='_blank' className=' font-bold text-2xl text-cyan-400 hover:cursor-pointer hover:text-cyan-900'>{h}</a>
        </div>
        <p className='text-[1vw] text-gray-400 hover:text-cyan-600 hover:cursor-pointer max-sm:text-[2.2vw]'>{d}</p>
        <p className='absolute bottom-4 font-bold text-cyan-400'>{tech}</p>
      </div>
    </div>
  )
}

export default Card