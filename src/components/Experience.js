import React from 'react';
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
  return  <section id="experiences">
  <div className="container px-5 py-10 mx-auto text-center">
    <UsersIcon className="w-10 inline-block mb-4 text-gray-800" />
    <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-12">
      Professional Experience
    </h1>
    <div className="flex flex-wrap m-4">
      {experiences.map((experience) => (
    <ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
         <div class="flex items-center">
             <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full dark:bg-blue-900 ring-0 sm:ring-8 ring-white dark:ring-gray-900 shrink-0">
                 <svg class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
             </div>
             <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
         </div>
         <div class="mt-3 sm:pr-8 sm:mt-6">
             <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
             <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
             <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
         </div>
     </li>
     </ol>
      ))}
    </div>
  </div>
</section>;
};

export default Experience;
