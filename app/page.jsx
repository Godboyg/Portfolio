"use client"
import React, { useEffect, useState } from 'react'
import "./globals.css"
import { Link } from 'react-scroll'
import HamburgerToggle from './Components/Toggle';
import Card from './Components/Card';
import Image from 'next/image';
import project1 from "../public/project1.jpeg"
import project2 from "../public/project2.jpeg"

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
    <div className="w-full bg-gray-900">
      <div className={`flex item-center justify-between max-sm:items-center max-sm:justify-between transition-all duration-300 fixed top-0 z-10 bg-black w-full py-6 px-20 max-sm:px-10  ${scrolled ? 'bg-black text-cyan-300 shadow-lg' : 'bg-transparent text-cyan-400'}`}>
        <h1 className='font-black text-[2vw] max-sm:text-[7vw] flex items-center justify-center hover:cursor-pointer transition duration-400 ease-in-out hover:scale-105'>Kushal</h1>
        <nav className="shadow z-50 p-4 max-sm:hidden">
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
        <div className="hidden max-sm:block">
          <HamburgerToggle />
        </div>
      </div>
      <div className="h-screen flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-20">
         <div className="flex flex-col w-[50%] items-center justify-center max-sm:w-full max-sm:p-5">
           <h1 className='font-bold text-3xl text-cyan-500'>Welcome !!</h1>
           <p className='font-bold text-4xl text-cyan-600 max-sm:text-center'>I'm a Full Stack Developer</p>
           <div className="h-12 w-24 bg-cyan-200 mt-5 rounded-md">
            <a href="https://drive.google.com/file/d/1WrJe0RrN2Rah6ZIP30y1jcCjseDdrvsp/view?usp=drive_link" target='_blank' className="font-bold h-full w-full flex items-center justify-center ">Resume</a>
           </div>
         </div>
         <div className="w-[50%] flex items-center justify-center max-sm:w-full">
           <div className="h-[25vw] w-[25vw] max-sm:w-[40vw] max-sm:h-[40vw] rounded-full overflow-hidden bg-green-300">
            <img className='h-full w-full object-cover hover:cursor-pointer' src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
         </div>
      </div>
      <main className="w-full relative">
        <section id='about' className="h-screen bg-gray-900 flex items-center justify-center">
          <h2 className="text-6xl text-gray-500">About Section</h2>
        </section>
        <section className='h-screen w-full absolute top-0 px-30 py-40 max-sm:px-10 max-sm:py-25'>
          <p className='text-2xl text-cyan-600'>INTRODUCTION</p>
          <h1 className='text-7xl font-bold tracking-wider text-white max-sm:text-6xl'>SKills.</h1>
          <p className='text-cyan-400 mt-5 leading-7 max-sm:leading-10 max-sm:text-[2.1vw]'>
            Hey! I'm a passionate Full-Stack Developer with a focus on the MERN stack (MongoDB, Express.js, React, and Node.js). I'm currently in my second year of studies, constantly building real-world projects to sharpen my skills and stay ahead in the ever-evolving world of web development.
            <br /><br />
             I love turning ideas into functional, responsive, and beautiful web applications. Whether it's real-time apps with sockets, API integrations, or building scalable backend systems — I'm all in.
             <br /><br />
             I'm also diving into tools like Tailwind CSS, Next.js, and MongoDB Atlas to level up my development experience. Always curious, always learning.
          </p>
        </section>
      </main>
      <main className="w-full relative">
        <section id='work' className="h-screen bg-gray-900 flex items-center justify-center">
          <h2 className="text-6xl text-gray-500">Work Section</h2>
        </section>
        <section className='h-screen w-full absolute top-0 px-30 py-40 max-sm:px-10 max-sm:py-25'>
          <p className='text-2xl text-cyan-600'>MY WORK</p>
          <h1 className='text-7xl font-bold tracking-wider text-white max-sm:text-5xl'>PROJECTS.</h1>
          <p className='text-cyan-400 mt-5 leading-10 max-sm:text-[2.1vw]'>
          I am a passionate and detail-oriented Full Stack MERN Developer with hands-on experience in building dynamic, scalable, and user-focused web applications. 
          Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting end-to-end solutions that combine efficient backend architectures with clean, responsive frontends. 
          My development approach focuses on writing clean, maintainable code, implementing real-time functionalities, and integrating third-party APIs and AI tools to enhance user experience. 
          I’ve worked on diverse projects—from AI-driven video chat platforms to responsive Figma-to-React UI builds—demonstrating my ability to handle both logic-intensive systems and pixel-perfect designs. 
          I thrive in fast-paced environments, love solving complex problems, and continuously seek opportunities to grow and deliver impactful solutions.
          </p>
        </section>
        <div className="h-screen flex max-sm:flex-wrap gap-10 max-sm:gap-5 w-full px-30 pb-40 max-sm:px-10 max-sm:py-25">
          <Card 
          h="AI Vedio Chat App" 
          img={project1}
          d="AI Video Chat App is a real-time, interest-based video communication platform that intelligently connects users using AI-driven matching algorithms.
           Built with the MERN stack and WebSockets (Socket.IO), the app enables seamless peer-to-peer video calls using WebRTC and matches users based on shared or related interests. 
           It features dynamic socket management, fast signaling, and a clean UI for smooth user experience. Designed for scalability and performance, the app provides an engaging way for users to meet and interact face-to-face based on what they truly care about."
           tech="#React #Node/Express #Mongoose #Google Gemini #JWT #Socket.io #WebRTC"
           url="https://aivediochatapp.netlify.app/"
          />
          <Card 
          h="Figma TO React" 
          img={project2}
          d="Figma to React Portfolio Website is a fully responsive, pixel-perfect React application developed by translating a modern Figma design into a live, interactive frontend.
           Built with React and styled using Tailwind CSS, the project showcases a clean and scalable component structure, mobile-first responsiveness, and smooth UI transitions. 
           The site demonstrates strong attention to design fidelity and frontend best practices, making it ideal for presenting portfolio content or landing pages with a sleek, professional look."
           tech="#React  #Tailwind CSS"
           url="https://techoreact.netlify.app/"
          />
        </div>
        <div id='contact' className="h-screen w-full text-white px-30 py-30 max-sm:h-[50vh] max-sm:px-10 max-sm:py-5">
          <div className="h-full w-full p-10 bg-cyan-700 rounded-lg">
            <h1 className='text-white text-3xl max-sm:text-2xl'>Get IN Touch!</h1>
            <p className='text-6xl font-bold'>Contact.</p>
            <div className="">
              <div className="mt-5">
                <a href="https://www.linkedin.com/in/kushal-singh-negi-80ab502a8/"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24' width='32' height='32'><path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2c.65-1.21 2.07-2.2 4.4-2.2 4.7 0 5.6 3.1 5.6 7.1V24h-5v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 1.95-2.9 4v7.6H7.5V8z'/></svg>" /></a>
              </div>
              <div className="mt-5">
                <a href="https://github.com/Godboyg?tab=repositories"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24' width='32' height='32'><path d='M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.21 11.46.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.63-4.04-1.63-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.09-.73.09-.73 1.22.09 1.87 1.26 1.87 1.26 1.08 1.88 2.84 1.34 3.53 1.03.11-.8.42-1.34.76-1.65-2.67-.3-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.25-3.29-.13-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.25a11.39 11.39 0 0 1 3.01-.41c1.02 0 2.04.14 3.01.41 2.28-1.57 3.29-1.25 3.29-1.25.67 1.64.26 2.84.13 3.14.78.86 1.25 1.95 1.25 3.29 0 4.7-2.8 5.74-5.48 6.04.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.02 12.02 0 0 0 24 12.07C24 5.4 18.63 0 12 0z'/></svg>" /></a>
              </div>
              <div className="mt-5">
                <a href="mailto:your-email@gmail.com" rel="noopener noreferrer"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 48 48' width='32' height='32'><path d='M43.5 8H4.5C3.1 8 2 9.1 2 10.5v27C2 39.9 3.1 41 4.5 41h39c1.4 0 2.5-1.1 2.5-2.5v-27C46 9.1 44.9 8 43.5 8zM43 37H5V11l19 13.3L43 11v26z'/></svg>" /></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default page
