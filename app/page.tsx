"use client"
import React from 'react'
import { motion } from "motion/react";
import Header from './Components/Header';
import { ReactTyped } from "react-typed";

function page() {
  return (
    <>
    <div className='relative h-screen w-full flex flex-col items-center justify-center bg-black text-white'>
      <div className="absolute top-1">
        <Header />
      </div>
      <div className="">
        <motion.h1
         initial={{ opacity: 0, y: 200 }}
         animate={{ opacity: 1, y: -50 }}
         transition={{ duration: 0.8 }}
         className="text-4xl md:text-5xl  text-center w-[90vw] font-light"
        > 
        Hey!! There , I’m <span className="text-cyan-400 font-bold">Kushal Singh Negi</span>
        </motion.h1>
      </div>
      <div className="absolute p-2 top-100 md:top-90 md:left-70 w-[85vw] h-[33vh] md:w-[40vw] md:h-[30vh] text-white">
        <p className='non-italic sm:italic md:text-2xl'>“Full-Stack MERN Developer | Turning ideas into scalable web apps.”</p>
        <ReactTyped
        strings={[
          "Full-Stack MERN Developer",
          "Building real-time apps with WebSockets and WebRTC",
          "Exploring Solana & Blockchain.",
        ]}
        typeSpeed={40}
        backSpeed={40}
        loop
        className="text-lg md:text-2xl text-cyan-300 italic"
        />
        <div className="">
           <a
           href='https://drive.google.com/file/d/1AVWv2nY-OxXjCGbEJWiGsPcLYZzHU8Aa/view'
           target='_blank'
            className="absolute bottom-0 px-8 py-3 flex items-center justify-center hover:cursor-pointer bg-cyan-500 text-black font-semibold rounded-xl shadow-lg hover:bg-cyan-400 transition">
              Resume
           </a>
           <a
          href="#contact"
          className="absolute hidden sm:block bottom-0 left-50 px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl shadow-lg hover:bg-cyan-500 hover:text-black transition"
        >
          Hire Me
        </a>
        </div>
      </div>
    </div>
    <div className="h-screen w-full">
        <section id='about' className='h-full w-full flex items-center justify-center'>
          <div className="w-[80vw] h-[50vh] md:w-[60vw] md:h-[40vh]">
            <h1 className='text-[2rem] font-bold sm:font-light bg-gradient-to-l from-black to-blue-500 text-transparent sm:text-white
            bg-clip-text'>About Me!</h1>
            <p className='text-white non-italic sm:italic mt-5 leading-loose text-lg'>I’m a 3rd-year Computer Science student and a passionate <span className='font-bold text-cyan-500 text-xl'>Full-Stack MERN developer</span>.  
              I enjoy building <span className='text-cyan-500 non-italic font-bold text-xl'>scalable, user-friendly web applications</span> and exploring innovative ideas.  
              Currently diving into <span className='text-xl text-cyan-500 font-bold'>Solana and Web3</span>, I aim to create impactful digital solutions  
              while constantly sharpening my skills with new technologies.  
            </p>
             <blockquote className="relative mt-20 text-lg md:text-xl text-white leading-loose italic border-l-4 border-cyan-400 pl-6">
              <span className="absolute -left-4 -top-4 text-cyan-400 text-6xl font-serif">“</span>
                My journey started with curiosity for coding, which grew into a drive for 
                developing real-world projects. When I’m not coding, I enjoy exploring 
                new tech trends and enhancing my problem-solving skills.
              <span className="absolute -bottom-8 right-2 text-cyan-400 text-6xl font-serif">”</span>
             </blockquote>
          </div>
        </section>
    </div>
    <div className="h-screen w-full flex items-center justify-center">
       <section id="skills" className="py-20 w-[90vw] sm:w-[60vw] bg-green-400 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
         <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
      
      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-cyan-400/50 transition duration-300">
        <img src="/icons/react.svg" alt="React" className="w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-medium">React</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-green-400/50 transition duration-300">
        <img src="/icons/node.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-medium">Node.js</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-emerald-400/50 transition duration-300">
        <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-medium">MongoDB</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-sky-400/50 transition duration-300">
        <img src="/icons/tailwind.svg" alt="Tailwind CSS" className="w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-medium">Tailwind CSS</p>
      </div>

      {/* Add more cards here */}
    </div>
        </div>
       </section>
    </div>
    </>
  )
}

export default page