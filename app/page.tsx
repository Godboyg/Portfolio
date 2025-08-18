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
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-3xl text-center font-light"
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
        <section id='about' className='h-screen w-full flex items-center justify-center'>
          <div className="w-[80vw] h-[50vh] md:w-[60vw] md:h-[40vh]">
            <h1 className='text-[2rem] font-bold sm:font-light bg-gradient-to-l from-black to-blue-500 text-transparent sm:text-white
            bg-clip-text'>About Me!</h1>
            <p className='text-white italic mt-5 leading-7 sm:leading-loose text-lg'>I’m a 3rd-year Computer Science student and a passionate <span className='font-bold text-cyan-500 text-xl'>Full-Stack MERN developer</span>.  
              I enjoy building <span className='text-cyan-500 non-italic font-bold text-xl'>scalable, user-friendly web applications</span> and exploring innovative ideas.  
              Currently diving into <span className='text-xl text-cyan-500 font-bold'>Solana and Web3</span>, I aim to create impactful digital solutions  
              while constantly sharpening my skills with new technologies.  
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default page