import React from 'react';
import { UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
  return <section id="experiences">
    <div className="container px-5 py-10 mx-auto text-center">
      <UsersIcon className="w-10 inline-block mb-4 text-gray-800" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-12">
        Professional Experience
      </h1>
      <div className="flex flex-wrap m-4">
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              {experiences.map((experience, idx) => (
                <div role="listitem" key={idx} className="lg:mx-3 sm:w-3/4 relative mt-16 mb-32 sm:mb-24 lg:w-full">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src={experience.image} alt={experience.company} className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16 pb-5">
                      <h1 className="font-bold text-3xl text-center mb-1">{experience.company}</h1>
                      <p className="text-gray-800 text-lg text-center">{experience.name}</p>
                      <p className="text-gray-800 text-md text-center">{experience.timeline}</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;
