import React from 'react'
import { allSections } from '../burgersession';
import { useState } from 'react';


const BurgerSession = () => {
    const [selected, setSelected] = useState(1);
  return (
    <>
    <main className='py-7 ' >
        <section className='container mx-auto '>
    <div className=" bg-[#1a1a1a] p-7  md:rounded-full  flex justify-between space-x-6">
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
            className="hidden  md:block w-20 h-20 object-contain"
          />
          <span
            className={`hidden  md:block mt-2 md:text-sm  ${
              selected === allSection._id ? "text-white font-bold" : "text-gray-400"
            }`}
          >
            {allSection.title}
          </span>
          <div>


<div className="carousel rounded-box w-96 lg:hidden md:none ">
  
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
      className=" w-[200px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
      className="w-full" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
      className="w-[150px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
      className="w-[150px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
      className="w-full" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
      className="w-full" />
  </div>

  </div>
</div>

          </div>
      ))}
    </div>
    </section>
   </main>
    </>
  );
}
  


export default BurgerSession
