import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,useEffect } from "react";
import { Home } from "./routes/routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import LoadingRing  from "./utils/Loader";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { Toaster, toast } from 'sonner';
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";




// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []


function App() {
  // const [cart, setCart] = useState(cartItemsFromLocalStorage);
  //   useEffect(()=>{
  //     localStorage.setItem('cart',JSON.stringify(cart))
  
  //   },[cart])
  //   console.log(cart);
    
  //   let handleAddToCart = (product) => {
  //     const productSelected = cart.find(
  //       (singleCart) => singleCart._id === product._id
  //     );
  //     if (productSelected) {
  //       setCart(
  //         cart.map((oneItem) =>
  //           oneItem._id === product._id
  //             ? {
  //                 ...productSelected,
  //                 quantity: productSelected.quantity + 1,
  //               }
  //             : oneItem
  //         )
  //       );
  //     } else {
  //       setCart([...cart, { ...product, quantity: 1 }]);
  //     }    
  //   };
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <LoadingRing />
            </div>
          }
        >
          <Navbar  />
          
          
          
          
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/Order" element={<Order />} />
             <Route path="Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            
            
            </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
