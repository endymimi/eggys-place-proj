import React from 'react'
import {
  burgers,
  Combos,
  drinks,
  chickens,
  chips,
  salad,
  allProducts,
} from "../product";

const Cart = () => {
  return (
    <>
     <main className='bg-[#2F2F2F] '>
      <article className='wrapper'>

      {/* SECTION FOR CART PAGE  */}
      <section className='grid lg:grid-cols-3 gap-[20px]'>
        {/* div for cart  */}
        <div className='col-span-2 bg-black'>
          <h2 className='text-white border-b-[2px] border-b-white text-[24px] leading-[100%]'>Cart 2</h2>

        </div>
        {/* div for summary */}
        <div className='bg-black p-[15px] gap-[15px] rounded-[10px]'>
          <h2 className='text-[24px] leading-[100%] text-white py-4'>Summary</h2>
          {/* div for summary content */}
          <div className='bg-[#252422] rounded-[8px] py-3'>
            {/* div for product total */}
            <div className='flex justify-between'>

            <h3 className='text-white text-[18px]'>Product Total(2)</h3>
            <p className='text-[#B67B0F] text-[18px]'>&#8358; 20,000</p>
            </div>
            {/* div for vat */}
            <div className='flex justify-between'>

            <h3 className='text-white text-[18px]'>VAT</h3>
            <p className='text-[#B67B0F] text-[18px]'>&#8358; 1,000</p>
            </div>
            {/* div for delivery */}
            <div className='flex justify-between border-b-[2px] border-b-white'>

            <h3 className='text-white text-[18px]'>Delivery</h3>
            <p className='text-[#B67B0F] text-[18px]'>&#8358; 1,500</p>
            </div>
            {/* div for total */}
            <div className='flex justify-between'>

            <h3 className='text-white text-[18px]'>Total</h3>
            <p className='text-[#B67B0F] text-[18px]'>&#8358; 22,500</p>
            </div>

          </div>
          {/* div for button */}
          <div className="">
      <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base text-white">Add to Cart</button>
    </div>

        </div>

      </section>
      {/* section for similar products */}
      <section className='container mx-auto my-8'>
        <h2 className='md:text-[24px] text-base text-white font-[500] py-4 leading-[100%]'>Similar Products You Might Like</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] text-white'>

        {burgers.slice(3, 7).map((burger) => { const{ _id, image, title, description, ratingicon, rating, price, duration

} = burger;






return(
  <div key={burger._id}>
            <div className="card bg-[#252422] w-full shadow-sm">
  <figure>
    <img
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    {/* div  for title and rating icon  */}
    <div className='flex justify-between'>

    <h2 className="card-title text-white text-[20px] font-[500] leading-[100%]">{title}</h2>
      <figure className='border-[1px] border-[#B67B0F] rounded-[6px] py-[6px] px-[4px]'>
        <img src={ratingicon} alt="" />
        <figcaption>{rating}</figcaption>
      </figure>
    </div>
     {/* div for price & and duration  */}
     <div className='flex place-items-center justify-between'>
      <h3 className='text-[#B67B0F] text-[31px] lg:whitespace-nowrap'><span className='text-[15px]'>&#8358;</span> {price}</h3>
      <h5 className='text-[#FBFBFB] text-[16px] lg:whitespace-nowrap'>{duration}</h5>
    </div>
    {/* Add to Cart Div */}
    <div className="card-actions justify-end">
      <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base">Add to Cart</button>
    </div>
  </div>
</div>


          </div>
        )})}
        </div>
      </section>
      </article>

    </main>
      
      
    </>
  )
}

export default Cart