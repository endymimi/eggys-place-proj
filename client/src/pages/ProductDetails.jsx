import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { useParams } from 'react-router-dom';
import { burgers, combos, drinks, chickens, chips, salads } from '../product';

const ProductDetails = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { id } = useParams();
  
  const allCategories = { burgers, combos, drinks, chickens, chips, salads };
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let foundProduct = null;
    let selectedCategory = [];

    for (const category in allCategories) {
      foundProduct = allCategories[category].find((item) => item._id == id);
      if (foundProduct) {
        selectedCategory = allCategories[category];
        break;
      }
    }

    if (foundProduct) {
      setProduct(foundProduct);
      setRelatedProducts(selectedCategory.filter((item) => item._id !== id).slice(0, 4));
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-white">Product not found</p>;
  }

  return (
    <main className="mx-auto px-4 md:px-16 py-6 bg-[#2F2F2F] text-white">
      {/* section-1  */}
      <section className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.title} className="rounded-lg md:w-150 w-full max-w-md mx-auto" />
        </div>
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-300">{product.description}</p>
          <div className="my-27">
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="bg-[#B67B0F] md:leading-[100%] md:w-95 lg:w-125 w-70 rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="wrapper">
        
        
        <h2 className="md:text-2xl text-3xl font-semibold md:mb-6 mx-5">Others You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       

          {relatedProducts.map((item) => (
            <div key={item._id} className="bg-[#222] p-4 rounded-lg text-center">
              <img src={item.image} alt={item.title} className="rounded-lg mb-4" />
              
              <h3 className="text-xl font-medium">{item.title}</h3>
              <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="bg-[#B67B0F] md:leading-[100%] md:w-78 lg:w-75 w-70 rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base cursor-pointer"
            >
              Add to Cart
            </button>
              
            </div>
          ))}
        </div>
          

        
      </section>
    </main>
  );
};

export default ProductDetails;