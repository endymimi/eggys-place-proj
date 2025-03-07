import React from 'react'
import { burgers } from '../burger'
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
          <h2 className="text-m  mt-3">{burger.title}</h2>
          <button className="">
            <img className='w-[45px] my-3 ml-10 md:ml-6' src={starBox} alt="Star-Icon" /> 
          </button>
          </div>
          <div className='flex justify-between'>
          <p className="text-[#B67B0F]">&#8358;{burger.price}</p>
          <p className='text-[#FBFBFB] text-[12px] pl-3'>{burger.duration}</p>
          </div>
          <button className="bg-[#B67B0F] text-[#FBFBFB] w-80 md:w-75 h-10 rounded-3xl">Add to Cart</button>
          
        </div>
      ))}
    </div>
  

      </div>
    </main>
    </>
  )
  
}

export default Products
