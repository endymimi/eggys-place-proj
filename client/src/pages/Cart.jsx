import React from "react";
import { burgers, combos, drinks, chickens, chips, salads } from "../product";
import Vectordelete from "../assets/vector delete.svg";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  console.log(Cart);
  const {cart, setCart} = useContext(CartContext)
  function handleRemove(cartId) {
    let remove = cart.filter((cartItem) => cartItem._id !== cartId);
    console.log(333);

    setCart(remove);
  }

  let handleInc = (productId)=>{
      const incQty = cart.map((cartItx)=>cartItx._id === productId ? {...cartItx,quantity:cartItx.quantity + 1} : cartItx )
     
      setCart(incQty)
  }

  let handleDec = function(itemId){
       const decQty =cart.map((cartItx)=>{
        if(cartItx._id === itemId){
          const qty = cartItx.quantity > 1 ? cartItx.quantity -1 : 1;
          return{...cartItx,quantity:qty}
        }
        return cartItx;
       })
       setCart(decQty)
  }

  // total price
  const totalPrice = cart.reduce((total,product)=> total + parseFloat(product.price) * product.quantity, 0)
 

  return (
    <>
      <div className="bg-[#2F2F2F] text-white">
        {cart.length === 0 ? (
          "No Cart Items "
        ) : (
          <main className="bg-[#2F2F2F]">
            {/* section for  cart  */}
            <section className="text-white wrapper grid lg:grid-cols-3 gap-[24px] wrapper">
              {/* div for  cart  */}
              <div className="lg:col-span-2 bg-black rounded-[8px] py-3 p-[15px] ">
                <h1 className="text-white border-b-[1px] border-b-white text-[24px] leading-[100%] p-[7px] ">
                  Cart
                </h1>
                <div className=" flex flex-col gap-[25px] py-3">
                  {cart.map((cartItem) => {
                    const {
                      _id,
                      image,
                      title,
                      description,
                      ratingicon,
                      rating,
                      price,
                      duration,
                      quantity,
                    } = cartItem;
                    return (
                      <div key={cartItem._id}>
                        <div className="card bg-[#2F2F2F] w-full shadow-sm p-3">
                          <div className="lg:flex justify-between ">
                            <div className="lg:flex lg:gap-[20px] items-center">
                              <figure className="rounded-[8px] lg:w-[92px]">
                                <img src={image} alt={title} />
                              </figure>
                              <div className="">
                                <h2 className="">{title}</h2>
                                <p>14/01/2025</p>
                                <p className="text-[#B67B0F]">&#8358;{price}</p>
                              </div>
                            </div>
                            <div className="justify-between flex  lg:flex-col">
                              {/* figure for delete/remove icon  */}
                              <figure
                                className="cursor-pointer "
                                onClick={() => handleRemove(_id)}
                              >
                                <img src={Vectordelete} alt="delete button" />
                              </figure>
                              {/* div for quantity */}
                              <div className="flex">
                                <button
                                  className="bg-[#B67B0F] rounded-full outline-none btn border-none text-white"
                                  onClick={() => handleInc(_id)}
                                >
                                  +
                                </button>
                                <p className="px-3">{quantity}</p>
                                <button className="bg-[#B67B0F] rounded-full outline-none btn border-none text-white" onClick={() => handleDec(_id)} >
                                  -
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* div for summary  */}
              <div className="rounded-[10px] bg-black p-[15px]">
                <h2 className="text-[24px] leading-[100%] text-white py-4">
                  Summary
                </h2>
                {/* div for summary content */}
                <div className="bg-[#252422] rounded-[8px] py-3">
                  {/* div for product total */}
                  <div className="flex justify-between p-[10px]">
                    <h3 className="text-white text-[18px]">Product Total ({(cart.length)})</h3>
                    <p className="text-[#B67B0F] text-[18px]">&#8358; {totalPrice}</p>
                  </div>
                  {/* div for vat */}
                  <div className="flex justify-between p-[10px]">
                    <h3 className="text-white text-[18px]">VAT</h3>
                    <p className="text-[#B67B0F] text-[18px]">&#8358; 1000</p>
                  </div>
                  {/* div for delivery */}
                  <div className="flex justify-between border-b-[2px] border-b-white p-[10px]">
                    <h3 className="text-white text-[18px]">Delivery</h3>
                    <p className="text-[#B67B0F] text-[18px]">&#8358; 1,500</p>
                  </div>
                  {/* div for total */}
                  <div className="flex justify-between">
                    <h3 className="text-white text-[18px] p-[10px]">Total  </h3>
                    <p className="text-[#B67B0F] text-[18px]">&#8358; {(totalPrice + 2500).toLocaleString()}</p>
                  </div>
                </div>
                {/* div for button */}
                <div className="py-4">
                <Link to="/Checkout">
                  <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base text-white">
                 <span> Check Out</span>  
                  </button>
                  </Link>
                  
                  
                  
                </div>
              </div>
            </section>
            {/* section for similar products */}
            <section className="container mx-auto p-[15px]">
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
          </main>
        )}
      </div>
    </>
  );
};

export default Cart;
