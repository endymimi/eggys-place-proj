import React, { useState } from "react";
import {
  burgers,
  Combos,
  drinks,
  chickens,
  chips,
  salad,
} from "../product";

const Products = () => {
  const [selectedCategorys, setSelectedCategory] = useState(burgers);

  return (
    <>
      {/* Product Section */}
      <section className="flex justify-between w-full rounded-[101px] bg-[#252422] p-6">
        <div className="carousel carousel-center lg:w-full space-x-24 px-8">
          <a
            onClick={() => setSelectedCategory(burgers)}
            href="#burger"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Burger</p>
          </a>
          <a
            onClick={() => setSelectedCategory(Combos)}
            href="#combos"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Combos</p>
          </a>
          <a
            onClick={() => setSelectedCategory(drinks)}
            href="#drinks"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Drinks</p>
          </a>
          <a
            onClick={() => setSelectedCategory(chickens)}
            href="#chicken"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Chicken</p>
          </a>
          <a
            onClick={() => setSelectedCategory(chips)}
            href="#chips"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chips_yn9jhf.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Chips</p>
          </a>
          <a
            onClick={() => setSelectedCategory(salad)}
            href="#salads"
            className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100"
          >
            <img
              src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
              className="rounded-box w-[120px] h-[120px] object-contain"
            />
            <p>Salads</p>
          </a>
        </div>
      </section>

      {/* Section-2 */}
      <section className="container mx-auto my-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[54px] lg:gap-x-[15px] gap-[44.46px] md:w-full">
          {selectedCategorys.map((product) => {
            // Proper destructuring
            const { _id, image, title, ratingicon, rating, price, duration } = product;

            return (
              <div key={_id} className="card-container">
                <div className="card bg-[#252422] text-[#FBFBFB] p-3 w-full mx-auto shadow-sm">
                  <figure>
                    <img src={image} alt={title} className="product-image" />
                  </figure>
                   {/* card body div */}
                   <div className="card-body">
                    {/* div  for title and rating icon  */}
    <div className='flex justify-between'>

<h2 className="card-title text-[20px] font-[500] leading-[100%]">{title}</h2>
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
