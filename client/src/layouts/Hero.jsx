import React from 'react'
import burgerImg from "../assets/burgerBg.svg";

const Hero = () => {
  return (
    <>
    <main  className='bg-[url(https://res.cloudinary.com/ds0a0s3k3/image/upload/v1741087159/Hero-img_mxynhn.svg)] bg-cover bg-no-repeat h-[600px] bg-center   w-full '>
    

    
    <div className='container mx-auto justify-center items-center flex flex-col md:w-[650px] md:h-[110px]  '>
    <h4 className='text-[#FBFBFB]  font-RedHat font-[400] text-[28px] md:text-[56px] mt-30 md:mt-60'>The <span className='text-[#B67B0F] text-[35px] md:text-[56px] font-[500] font-Rammetto  '>ZING</span> in every bites</h4>
    <p className='text-[#FBFBFB] font-RedHat md:text-[23px] md:font-[400] md:tracking-wide tracking-tighter mx-4'> Savor the flavour! Explore our delicious menu  and order <span className='md:mx-40 mx-20' > now for a taste sensation!</span></p>
    
    </div>
    <div className='container mx-auto justify-center items-center my-35 md:my-55 md:ml-7 md:gap-6 gap-2 flex'>
    <button className='  md:block btn bg-[#B67B0F] rounded-[31px] text-[#F0F0F0] w-45 h-14'>Order Now!</button>
    <button className='  md:block btn bg-[#FBFBFB] rounded-[32px] text-[#100101] w-40 h-15'>View Menu</button>
    </div>
    
            
    </main>
    </>
  )
}

export default Hero