"use client"
import React, { useEffect, useState } from 'react'
import "./globals.css"
import { Link } from 'react-scroll'

function page() {

  const sections = ['about','work','contact'];
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <div className="h-screen w-full bg-gray-900">
      <div className={`flex item-center justify-between transition-all duration-300 fixed top-0 bg-black w-full py-4 px-20 max-sm:px-10  ${scrolled ? 'bg-black text-cyan-300 shadow-lg' : 'bg-transparent text-cyan-400'}`}>
        <h1 className='font-black text-[2vw] max-sm:text-[7vw] flex items-center justify-center hover:cursor-pointer transition duration-400 ease-in-out hover:scale-105'>Kushal</h1>
        <nav className="shadow z-50 p-4">
          <ul className="flex justify-center gap-10">
            {sections.map((section) => (
               <li key={section}>
               <Link
               to={section}
               spy={true}
               smooth={true}
               duration={500}
               activeClass="text-cyan-900"
               className="cursor-pointer transition-colors duration-200 text-[1.2vw] hover:text-white text-cyan-400"
              >
              {section.charAt(0).toUpperCase() + section.slice(1)}
               </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-[100vh] flex max-sm:flex-col">
         <div className="flex flex-col w-[50%] items-center justify-center max-sm:w-full">
           <h1 className='font-bold text-3xl text-cyan-500'>Welcome !!</h1>
           <p className='font-bold text-4xl text-cyan-600'>I'm a Full Stack Developer</p>
         </div>
         <div className="w-[50%] flex items-center justify-center max-sm:w-full">
           <div className="h-[25vw] w-[25vw] max-sm:w-[40vw] max-sm:h-[40vw] rounded-full overflow-hidden bg-green-300">
            <img className='h-full w-full object-cover hover:cursor-pointer' src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
         </div>
      </div>
      <main className="">
        <section id='about' className="h-screen bg-gray-900 flex items-center justify-center">
          <h2 className="text-4xl text-gray-700">Another Section</h2>
        </section>
      </main>
    </div>
    </>
  )
}

export default page