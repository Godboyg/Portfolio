import React, { useState } from "react";
import { Link } from 'react-scroll'

const HamburgerToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['about','work','contact'];

  return (
    <>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="h-8 w-8 relative flex flex-col justify-center items-center group"
    >
      <span
        className={`absolute h-0.5 w-10 bg-cyan-300 transform transition duration-400 ease-in-out
          ${isOpen ? "rotate-45 translate-y-.5" : "-translate-y-1.5"}
        `}
      />
      <span
        className={`absolute h-0.5 w-8 bg-cyan-400 transform transition duration-400 ease-in-out
          ${isOpen ? "-rotate-45 -translate-y-.5" : "translate-y-1.5"}
        `}
      />
    </button>
    <div
        className={`absolute top-20 right-0 w-48 bg-cyan-900 rounded-xl shadow-lg p-4 transition-all duration-450 ease-in-out origin-top-right
          ${isOpen ? "scale-150 opacity-100" : "scale-80 opacity-0"}
        `}
      >
        <ul className="space-y-2 text-sm text-white">
          {
            sections.map((sec , key) => (
              <li id="key"><Link activeClass="text-black"
              className="cursor-pointer transition-colors duration-200 hover:text-white text-cyan-400" to={sec} smooth={true} duration={500}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</Link></li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default HamburgerToggle;
