import React from 'react'
import { burgers } from '../burger'
import { useState } from 'react'
import starIcon from "../assets/STAR.svg";
import starBox from "../assets/star box.svg";

const Products = () => {


  return (
    <>
    <main>
      <div>
    
    <div className="  grid lg:grid-cols-3 gap-4">
      {burgers.map((burger) => (
        <div key={burger._id} className="bg-black text-white p-4 rounded-lg">
          <img  src={burger.image} alt={burger.title} className="w-full h-65 object-cover rounded-lg" />
          <div className='flex gap-30'>
          <h2 className="text-l  mt-2">{burger.title}</h2>
          <button className="">
            <img className='w-[45px] my-3' src={starBox} alt="Star-Icon" /> 
          </button>
          </div>
          <div className='flex justify-between'>
          <p className="text-[#B67B0F]">&#8358;{burger.price}</p>
          <p className='text-[#FBFBFB] text-[12px] mr-7'>{burger.duration}</p>
          </div>
          <button className="bg-[#B67B0F] text-[#FBFBFB] w-70 h-8 rounded-2xl">Add to Cart</button>
          
        </div>
      ))}
    </div>
  

      </div>
    </main>
    </>
  )
  
}

export default Products
