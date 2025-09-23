"use client"
import React from 'react'
import { motion } from "motion/react";
import Header from './Components/Header';
import { ReactTyped } from "react-typed";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa"
import 'remixicon/fonts/remixicon.css'
import ProjectCard from './Components/ProjectCard';
import { FaSquareXTwitter } from 'react-icons/fa6';

function page() {
  return (
    <>
    <div className="flex flex-col">
    <div className='relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white'>
      <div className="absolute top-1">
        <Header />
      </div>
      <div className="text-black font-semibold absolute p-3 bg-cyan-500 rounded-full top-45 sm:top-40 transition-all duration-150 ease-linear hover:cursor-pointer hover:scale-105 flex items-center justify-center gap-2">
        <span>Available for Work</span>
        <span><FaArrowRight /></span>
      </div>
      <div className="">
        <motion.h1
         initial={{ opacity: 0, y: 200 }}
         animate={{ opacity: 1, y: -60 }}
         transition={{ duration: 0.8 }}
         className="text-4xl md:text-5xl text-center w-[90vw] font-light"
        > 
        Hey!! There , I’m <span className="text-cyan-400 font-bold">Kushal Singh Negi</span>
        </motion.h1>
      </div>
      <div className="absolute p-2 top-100 md:top-90 md:left-70 w-[90vw] h-[33vh] md:w-[40vw] md:h-[30vh] text-white">
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
    <div className="h-screen w-full flex items-center justify-center">
        <section id='about' className='h-full w-[90vw] sm:w-[60vw] flex items-center justify-center'>
          <div className="w-[90vw] h-[80vh] md:w-[60vw] md:h-[60vh]">
            <h1 className='text-[2rem] font-bold sm:font-light bg-gradient-to-l from-black to-blue-500 text-transparent sm:text-white
            bg-clip-text'>About Me!</h1>
            <p className='text-white non-italic sm:italic mt-5 leading-loose text-lg'>I’m a 3rd-year Computer Science student and a passionate <span className='font-bold text-cyan-500 text-xl'>Full-Stack MERN developer</span>.  
              I enjoy building <span className='text-cyan-500 non-italic font-bold text-xl'>scalable, user-friendly web applications</span> and exploring innovative ideas.  
              Currently diving into <span className='text-xl text-cyan-500 font-bold'>Solana and Web3</span>, I aim to create impactful digital solutions  
              while constantly sharpening my skills with new technologies.  
            </p>
             <blockquote className="relative mt-20 text-lg md:text-xl text-white lea sm:leading-loose italic border-l-4 border-cyan-400 pl-6">
              <span className="absolute -left-4 -top-4 text-cyan-400 text-6xl font-serif">“</span>
                My journey started with curiosity for coding, which grew into a drive for 
                developing real-world projects. When I’m not coding, I enjoy exploring 
                new tech trends and enhancing my problem-solving skills.
              <span className="absolute -bottom-8 right-2 text-cyan-400 text-6xl font-serif">”</span>
             </blockquote>
          </div>
        </section>
    </div>
    <div className="min-h-screen w-full flex items-center justify-center">
       <section id="skills" className="py-20 w-[95vw] h-full sm:w-[60vw] mt-10 text-white">
        <div className="max-w-6xl mx-auto flex-1 px-3">
         <h1 className="text-[2rem] font-bold sm:font-light bg-gradient-to-l from-black to-blue-500 text-transparent sm:text-white
            bg-clip-text text-center mb-12">Skills</h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
      
      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-cyan-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" alt="React" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">React</p>
      </div>
      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-cyan-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" alt="React" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">Next</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-green-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">Node.js</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-emerald-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">MongoDB</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-sky-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">Tailwind CSS</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-green-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webrtc.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">WebRTC</p>
      </div>

      <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-green-400/50 transition duration-300">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/socketdotio.svg" alt="Node.js" className="w-12 h-12 mx-auto mb-4 invert" />
        <p className="text-lg font-medium">Sockect.Io</p>
      </div>
    </div>
        </div>
       </section>
    </div>
    <div className="min-h-screen w-full flex items-center justify-center">
      <section id="project" className='w-[95vw] sm:w-[60vw] py-15'>
        <h1 className="text-[2rem] font-bold sm:font-light bg-gradient-to-l from-black to-blue-500 text-transparent sm:text-white
            bg-clip-text text-center mb-12 sm:mt-3">Projects</h1>
        <div className="text-white flex items-center justify-center flex-col gap-15">
          <ProjectCard 
            title="RiverSide Clone" 
            description="Developed a Riverside-like web application enabling multi-user podcast recording with WebRTC. Implemented real-time audio/video streaming, local recording, and dynamic grid layouts. Integrated controls for mute, volume, and camera/audio toggling, and used FFmpeg for post-processing and HLS export." 
            img="/project1.jpeg"
            link="https://riverside-clone.netlify.app/"
            code="https://github.com/Godboyg/RiverSider-Clone"
            tech="#MERN #WebRTC #Sockets #FFmpeg #Redux"/>
            <ProjectCard 
            title="White-Board" 
            description="Developed a real-time collaborative whiteboard application using Next.js (React + TypeScript) for the frontend 
                    and Node.js with Socket.IO for the backend. " 
            img="/white-board.jpeg"
            link="https://white-board-client-eta.vercel.app/"
            code="https://github.com/Godboyg/WhiteBoard-client"
            tech="#Next/Reactjs #TypeScript #TailwindCSS #Nodejs #Socket.IO "/>
          <ProjectCard 
            title="Deep Meet" 
            description="Built a real-time AI-powered video chat app that matches users based on shared interests using WebRTC, Socket.IO, and MongoDB. Implemented features like smart interest matching, typing indicators, and call switching for an engaging user experience." 
            img="/project2.jpeg"
            link="https://deepmeet.netlify.app/"
            code="https://github.com/Godboyg/AiVideoChatAPPFrontend"
            tech="#MERN #WebRTC #Sockets"/>
            <ProjectCard 
            title="Review Book Platform" 
            description="Developed a full-stack book review platform where users can browse, review, and rate books. Implemented authentication, review management, and a responsive UI using React, Node.js, and MongoDB." 
            img="/project3.jpeg"
            link="https://reviewbookplatform.netlify.app/"
            code="https://github.com/Godboyg/Review-Book-Frontend"
            tech="#MERN #Redux"/>
        </div>
      </section>
    </div>
    <div className="h-screen w-full flex items-center justify-center">
      <section id='contact' className='w-[90vw] h-[80vh] py-10 px-6 sm:p-6 sm:h-[70vh] rounded-md bg-gradient-to-r from-green-500 to-blue-700 sm:w-[60vw]'>
        <div className="text-white h-full w-full flex flex-col gap-5">
          <a href="https://www.linkedin.com/in/kushal-singh-negi-80ab502a8/">
            <span className='font-bold text-5xl'><FaLinkedin /></span>
          </a>
          <a href="https://x.com/kushalthakur091">
            <span className='font-bold text-5xl'><FaSquareXTwitter /></span>
          </a>
          <a href="https://github.com/Godboyg?tab=repositories">
            <span className='font-bold text-5xl'><FaGithub /></span>
          </a>
        </div>
      </section>
    </div>
    </div>
    </>
  )
}

export default page