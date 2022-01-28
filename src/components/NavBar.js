import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-blue-800 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Rishabh Bajaj
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-black	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-700">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-700">
            Skills
          </a>
          <a href="#experiences" className="mr-5 hover:text-blue-700">
            Work Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-800 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );};

export default NavBar;
