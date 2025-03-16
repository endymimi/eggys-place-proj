import React, { useState ,useContext } from 'react'
import CartContext from '../context/CartContext';
import { useParams } from "react-router-dom";
import {  burgers,
  combos,
  drinks,
  chickens,
  chips,
  salads,  } from "../product";

const ProductDetails = () => {
  const [selectedCategorys, setSelectedCategory] = useState([
    burgers, 
    combos, 
    drinks, 
    chickens,  
    chips, 
    salads
  ].flat());
  const { id } = useParams();
  const products = selectedCategorys.find((item) => item._id == id);
  const relatedProducts = selectedCategorys.filter((item) => item._id !== id).slice(10, 14);
  return (
    <>
      <main className='mx-auto px-4 md:px-16 py-6 bg-[#2F2F2F] text-white'>
        {/* section-1  */}
        <section className='wrapper  grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Product Image */}
          <div>
                    <img src={products.image} alt={products.title} className=' rounded-lg w-full max-w-md mx-auto ' />
                </div>
                {/* Product Details */}
                <div className='  '>
                    <h1 className='text-3xl  font-bold -'>{products.title}</h1>
                    <p className='text-gray-300 '>{products.description} 
                    </p>
                    <div className='my-26'>
                    <button
                        onClick={() => {handleAddToCart(product) , toast('My first toast') }}
                        className=" bg-[#B67B0F] md:leading-[100%]  md:w-95 lg:w-125   w-80 rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base cursor-pointer "
                      >
                        Add to Cart
                      </button>
                      </div>
                </div>
                

        </section>
         {/* Related Products */}
         <section className='wrapper'>
                <h2 className='md:text-2xl text-3xl font-semibold md:mb-6'>Others You Might Like</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {relatedProducts.map((item) => (
                        <div key={item._id} className='bg-[#222] p-4 rounded-lg text-center'>
                            <img src={item.image} alt={item.title} className='rounded-lg mb-4' />
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

      </main>
      
    </>
  )
}

export default ProductDetails