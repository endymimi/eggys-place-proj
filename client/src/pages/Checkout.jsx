import React from "react";
import { useContext, useState, useRef } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";



const Checkout = () => {
  console.log(Checkout);
  const {cart, setCart} = useContext(CartContext)
  function handleRemove(cartId) {
    let remove = cart.filter((cartItem) => cartItem._id !== cartId);
    console.log(333);

    setCart(remove);

  }

  
    const modalRef = useRef(null);
  
    const openModal = () => modalRef.current.showModal();
    const closeModal = () => modalRef.current.close();

  const totalPrice = cart.reduce((total,product)=> total + parseFloat(product.price) * product.quantity, 0)
 
  


  return (
    <>
      <header className="bg-[#252422] grid grid-cols-2  ">
        <section className="space-y-6 bg-[#252422] my-5 mx-55 ">
          <div className="bg-black w-[791px] h-[330px] space-y-6 px-4 py-4 rounded-md">
        <div>
  <button className="btn text-white text-xl bg-[#252422] cursor-pointer flex items-center justify-between px-4 w-[500px] h-[60px] rounded-xl hover:bg-[#3A3A38] transition">
    <span>Recipient Information</span>
    <span className="text-[#B67B0F] font-semibold">{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={openModal}>Add</button>
<dialog ref={modalRef} id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="">
        {/* if there is a button in form, it will close the modal */}
        <button  onClick={closeModal} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></span>
  </button>
</div>

<div>
  <button className="btn text-white text-xl bg-[#252422] cursor-pointer flex items-center justify-between px-4 w-[500px] h-[60px] rounded-xl hover:bg-[#3A3A38] transition">
    <span>Delivery Information</span>
    <span className="text-[#B67B0F] font-semibold">{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={openModal} >Add</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Recipient Information</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button  onClick={closeModal} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></span>
  </button>
</div>

            <div>
              <button className="bg-[#B67B0F] text-white text-xl cursor-pointer w-40 h-12 rounded-xl">Clear All Data</button>
            </div>
            </div>
        </section>

        <section className="bg-[#252422] flex justify-center p-4">
  <div className="bg-black w-full max-w-[360px] rounded-lg p-4">
    {/* Header */}
    <h2 className="text-[24px] text-white pb-4">Summary</h2>

    {/* Summary Content */}
    <div className="bg-[#252422] rounded-lg p-4">
      {/* Product Total */}
      <div className="flex justify-between py-2">
        <h3 className="text-white text-[18px]">Product Total ({cart.length})</h3>
        <p className="text-[#B67B0F] text-[18px]">&#8358; {totalPrice.toLocaleString()}</p>
      </div>

      {/* VAT */}
      <div className="flex justify-between py-2">
        <h3 className="text-white text-[18px]">VAT</h3>
        <p className="text-[#B67B0F] text-[18px]">&#8358; 1,000</p>
      </div>

      {/* Delivery */}
      <div className="flex justify-between py-2 border-b border-white">
        <h3 className="text-white text-[18px]">Delivery</h3>
        <p className="text-[#B67B0F] text-[18px]">&#8358; 1,500</p>
      </div>

      {/* Total */}
      <div className="flex justify-between py-2">
        <h3 className="text-white text-[18px] font-semibold">Total</h3>
        <p className="text-[#B67B0F] text-[18px] font-semibold">
          &#8358; {(totalPrice + 2500).toLocaleString()}
        </p>
      </div>
    </div>

    {/* Checkout Button */}
    <div className="mt-4">
      <button className="bg-[#B67B0F] w-full cursor-pointer rounded-[31px] py-3 text-white text-lg font-semibold">
        Pay Now
      </button>
    </div>
  </div>
</section>

      </header>
    </>
  );
};

export default Checkout;
