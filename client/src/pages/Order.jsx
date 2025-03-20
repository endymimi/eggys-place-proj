import React from 'react';
import { orders } from "../order";
import { useState, useEffect, useContext } from 'react';
import CartContext from '../context/CartContext';
import { burgers, combos, drinks, chickens, chips, salads } from "../product";

const Order = () => {
  console.log(Order);
  const {cart, setCart} = useContext(CartContext)
  function handleRemove(cartId) {
    let remove = cart.filter((cartItem) => cartItem._id !== cartId);
    console.log(333);

    setCart(remove);
  }



  return (
   <>
   <header className='bg-[#252422]'>
   <main className=" min-h-screen p-6">
  <section className="container mx-auto max-w-3xl bg-black pl-3 pr-3">
    {/* Tabs */}
    <h3 className='text-white text-2xl'>Orders</h3>
    <hr className='text-[#FBFBFB]' />
    <div className="flex  text-white">
      <p className="text-lg cursor-pointer pb-2 border-b-4 border-[#B67B0F]">
        Ongoing/Delivered
      </p>
      <p className="text-lg cursor-pointer ml-6 pb-2 text-grey-400">
        Cancelled
      </p>
    </div>

    {/* Orders List */}
    <div className="mt-6 space-y-4">
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-[#252422] rounded-xl p-4 flex items-center shadow-md"
        >
          {/* Image */}
          <img
            src={order.image}
            alt={order.title}
            className="w-24 h-24 rounded-md"
          />

          {/* Order Details */}
          <div className="ml-4 flex-grow">
            <h3 className="text-white text-lg font-semibold">{order.title}</h3>
            <h2 className="text-white font-medium">&#8358;{order.price}</h2>
            <p className="text-[#252422]">{order.date}</p>
            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Delivered
            </span>
          </div>

          {/* View Details */}
          <h2 className="text-[#B67B0F] text-sm cursor-pointer">
            View Details...
          </h2>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-8 pb-7 space-x-2">
      <button className="bg-[#252422] text-white px-3 py-1 rounded">1</button>
      <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">2</button>
      <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">...</button>
      <button className="bg-[#252422] text-gray-300 px-3 py-1 rounded">10</button>
    </div>
  </section>
</main>
    <section className="container mx-auto " >
                  <h2 className=" wrapper md:text-[24px] text-base text-white font-[500] py-4 leading-[100%]">
                    Similar Products You Might Like
                  </h2>
                  <div className=" wrapper grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] text-white">
                    {burgers.slice(3, 6).map((burger) => {
                      const {
                        _id,
                        image,
                        title,
                        description,
                        ratingicon,
                        rating,
                        price,
                        duration,
                      } = burger;
    
                      return (
                        <div key={burger._id}>
                          <div className="card bg-[#252422] w-full shadow-sm">
                            <figure>
                              <img src={image} alt={title} />
                            </figure>
                            <div className="card-body">
                              {/* div  for title and rating icon  */}
                              <div className="flex justify-between">
                                <h2 className="card-title text-white text-[20px] font-[500] leading-[100%]">
                                  {title}
                                </h2>
                                <figure className="border-[1px] border-[#B67B0F] rounded-[6px] py-[6px] px-[4px]">
                                  <img src={ratingicon} alt="" />
                                  <figcaption>{rating}</figcaption>
                                </figure>
                              </div>
                              {/* div for price & and duration  */}
                              <div className="flex place-items-center justify-between">
                                <h3 className="text-[#B67B0F] text-[31px] lg:whitespace-nowrap">
                                  <span className="text-[15px]">&#8358;</span>{" "}
                                  {price}
                                </h3>
                                <h5 className="text-[#FBFBFB] text-[16px] lg:whitespace-nowrap">
                                  {duration}
                                </h5>
                              </div>
                              {/* Add to Cart Div */}
                              <div className="card-actions justify-end">
                                <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base">
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  </section>
                  </header> 
   </>
  )
}

export default Order