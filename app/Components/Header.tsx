"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { VscThreeBars } from "react-icons/vsc"
import 'remixicon/fonts/remixicon.css'

function Header() {

  const HeaderName: string[] = ["hero", "about" , "skills" , "project" , "contact"];
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <>
    <div id='hero' className='w-full p-1 h-20 flex items-center justify-center'>
      <div className="w-[90vw] fixed z-5 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-12 p-1
       bg-transparent backdrop-blur-sm flex items-center rounded-xl
       cyan-shadow shadow">   
        <div className="flex items-center w-full justify-between sm:hidden">
          <p className='ml-2 text-xl bg-gradient-to-r from-black to-blue-500 text-transparent 
           bg-clip-text font-bold'>Portfolio</p>
          <div className="mr-2 text-xl text-cyan-600 hover:cursor-pointer"
          onClick={e => setOpen(true)}>
             <VscThreeBars />
          </div>
        </div>
        <ul className='hidden sm:flex w-full h-full items-center justify-around hover:cursor-pointer'>
            {
                HeaderName.map((name : string) => (
                    <li key={name}>
                        <Link
                        to={name}
                        smooth={true}
                        duration={500}
                        activeClass="text-red-500"
                        className="cursor-pointer text-white"
                        >
                          <span className="font-light
                          relative after:content[''] after:absolute after:left-0 after:-bottom-1
                          after:w-0 after:h-[2px] after:bg-white after:duration-250 after:transition-all after:ease-in
                          hover:after:w-full">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
    {/* <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center 
        transition-transform duration-900 ease-in bg-green-500
        ${open ? "-translate-y-220 z-30 opacity-100" : "translate-y-[100vh] opacity-0"}`}
      >
        🚀 I slide up from bottom to top!
      </div> */}
    <div className={`fixed top-0 left-0 h-screen w-full bg-black ${open ? "block z-10 bg-transparent bg-opacity-50 backdrop-blur-sm" : "hidden z-0"}`}>
      <p className='absolute top-8 z-35 right-8 hover:cursor-pointer text-white'
      onClick={e => setOpen(false)}>close</p>
      <div className="flex items-center h-full justify-center text-white">
         <ul className='w-full h-full flex flex-col items-center justify-center gap-12 hover:cursor-pointer'>
            {
                HeaderName.map((name : string) => (
                    <li key={name}>
                        <Link
                        to={name}
                        smooth={true}
                        duration={500}
                        activeClass="text-red-500"
                        className="cursor-pointer text-white"
                        >
                          <span className="font-light
                          relative after:content[''] after:absolute after:left-0 after:-bottom-1
                          after:w-0 after:h-[2px] after:bg-white after:duration-250 after:transition-all after:ease-in
                          hover:after:w-full">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header
