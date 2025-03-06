import React from 'react'
import { allSections } from '../burgersession';
import { useState } from 'react';
import SearchBar from '../utils/SearchBar';

const BurgerSession = () => {
    const [selected, setSelected] = useState(1);
  return (
    <>
    <main className='bg-[#2F2F2F] py-7'>
        <section className='container mx-auto '>
    <div className=" bg-[#1a1a1a] p-7 md:rounded-full  flex justify-between space-x-6">
      {allSections.map((allSection) => (
        <div
          key={allSection._id}
          className={`flex flex-col items-center cursor-pointer transition duration-300 ${
            selected === allSection._id ? "opacity-100" : "opacity-40"
          }`}
          onClick={() => setSelected(allSection._id)}
        >
          <img
            src={allSection.image}
            alt={allSection.title}
            className=" hidden md:block w-20 h-20 object-contain"
          />
          <span
            className={` hidden md:block mt-2 md:text-sm  ${
              selected === allSection._id ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            {allSection.title}
          </span>
          </div>
         
      ))}
    </div>
    </section>
   </main>
    </>
  );
}
  


export default BurgerSession