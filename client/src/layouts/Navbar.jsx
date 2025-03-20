import React from "react";
import navLogo from "../assets/eggysPlaceBurger.png";
import location from "../assets/location.png";
import cartImg from "../assets/cartImg.png";
import loginImg from "../assets/login icon.png";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/icon search.svg";
import SignInOut from "../Btn/SignInOut";
import CartContext from "../context/CartContext";
import dropdown from "../assets/dropDownIcon.svg";
import helloIcon from "../assets/helloIcon.svg";
import dashboard from "../assets/dashboardIcon.png";
import orderIcon from "../assets/orderIcon.svg";
import logOut from "../assets/inbox.svg";
import inbox from "../assets/inboxx.svg";
import checkIcon from "../assets/checkIcon.svg";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [IsSignInOutOpen, setIsSignInOutOpen] = useState(false)
  const {cart} = useContext(CartContext)
  const [isLoggedIn, setIsLoggedIn] = useState(!false);
  const [outsideClick, setOutsideClick] = useState("dropdown")

 
     
  
  // const [showLocationIcon, setShowLocationIcon] = useState(false);
  // const locationRef = useRef(null);

  const handleSelectedLocation = (event) => {
    setSelectedLocation(event.target.value)
    
  }

  console.log("Selected Location:", selectedLocation);

  const handleOutsideClick = (event) => {
    setOutsideClick(event.target)
  }

  return (
    <>
      <header className="bg-[#100101] ">
        <nav className=" wrapper flex justify-between items-center ">
          <Link to="/"  >
          <div className="flex gap-4 items-center ">
            <img 
              className=" md:w-[70px] w-[55px] h-auto "
              src={navLogo}
              alt="nav-logo"
            />
          </div>
          </Link>
          {/* div for location */}
          <div
        className="dropdown dropdown-center "
        tabIndex={0}
        role="button"
        onClick={() => setIsClicked(!isClicked)}
      >
        <form>
          <div className="flex items-center bg-transparent ">
            <img
              className="w-12 h-auto pr-2 hidden md:block mr-10"
              src={location}
              alt="location icon"
            />
            <h4 className="text-[#F0F0F0] md:block hidden text-[13px] md:text-[30px] font-[500]">
              {selectedLocation}
            </h4>
            <div role="button" className="bg-transparent m-1" tabIndex={0}>
              <img
                src={searchIcon}
                alt="drop-down-img"
                className="cursor-pointer w-full md:hidden  "
              />
              

              <ul
                tabIndex={0}
                className=" hidden md:block dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm"
              >
                <li className="hover:text-red-600">
                  <label id="location1">
                    Lagos{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Lagos"
                      id="location1"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
                <li className="hover:text-red-600">
                  <label className="" id="location2">
                    Abuja{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Abuja"
                      id="location2"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
                <li className="hover:text-red-600">
                  <label id="location3">
                    Benin{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Benin"
                      id="location3"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>

          {/* div for form search input  */}
          <div className=" hidden lg:block">
            {/* form input for search bar  */}
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-[270px]  h-[50px] rounded-[32px] bg-[#F0F0F0] placeholder:text-[#100101] outline-none ps-[30px] border font-[400] text-[30px]"
              />
              {/* <img className='ab' src={searchBar} alt="" /> */}
            </form>
           
          </div>

          {/* div for All products  */}
          <div className="flex gap-4 items-center">
            {/* <h2 className="font-[500] text-[13px] md:ml-4 text-[#FBFBFB] hidden md:block">
              All Products
            </h2> */}
            {/* Ul for cart and login section */}
           
            <ul className="flex gap-[28px]">
              <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] md:ml-9 ml-4 rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px] ">
                <img className="md:w-10  w-15" src={cartImg} alt="cartLogo" />
                <Link to="Cart">
                  <span className="hidden md:inline-block ">Cart</span> {cart.length}
                </Link>
              </li>
              
              
                
                {isLoggedIn ? 
                <div>
                <div className="dropdown dropdown-down dropdown-center">
  <div tabIndex={0} role="button" className="text-white m-1 flex my-3 cursor-pointer"> <img src={helloIcon} alt="" />Hi,Eggys <img src={dropdown} alt="" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
    <li className="text-white hover:bg-[#B67B0F] md:block hidden cursor-pointer"><a> <img src={dashboard} alt="" /> DashBoard</a></li>
    <li className="text-white hover:bg-[#B67B0F] cursor-pointer"><a> <img src={helloIcon} alt="" /> My Account</a></li>
    <li className="text-white hover:bg-[#B67B0F] cursor-pointer"><a> <img src={orderIcon} alt="" /> Orders</a></li>
    <li className="text-white hover:bg-[#B67B0F] cursor-pointer"><a> <img src={inbox} alt="" /> Inbox</a></li>
    <li>
    <button class=" hover:bg-[#B67B0F] cursor-pointer flex gap-1 px-4 py-2 text-sm text-red-600 " onClick={() => document.getElementById('my_modal_2').showModal()}> <img src={logOut} alt="" /> Log Out</button>
    </li>
  </ul>
</div>

    <dialog id="my_modal_2" className="modal">
    
    <div className="modal-box bg-[#252422] w-[425px]  p-6 flex flex-col items-center justify-center text-center ">
      <div>
        <img  className="mb-4" src={checkIcon} alt="check-image" />
      </div>
    <h3 className="font-bold text-lg text-white ">Log Out</h3>
    <p className="py-4 text-white">  Are you sure, you want to Log out.</p>
    <div className="flex justify-center gap-17 w-full mt-4">
        <button className="btn text-white rounded-4xl bg-[#252422] w-35 h-10">Log Out</button>
        <button className="btn text-white rounded-4xl bg-[#B67B0F] w-35 h-10">Cancel</button>
      </div>
      </div>
      
      <form method="dialog" className="modal-backdrop">
    <button>close</button>
     </form>    

    </dialog>
  </div>



 
    : 
                
                <Link>
                
               
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                
                <button
                  className="btn flex gap-2 bg-white md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]"
                  onClick={() => setIsSignInOutOpen(true)
                  }
                >
                  <img
                    className=" w-18"
                    src={loginImg}
                    alt="loginLogo"
                  /> 
                  
                  
                  <span className="hidden md:inline-block ">Login</span>
                <SignInOut isOpen={IsSignInOutOpen} onClose={()=> setIsSignInOutOpen(false)} />
                </button>
                
                  </Link>}
              
            </ul>
          </div>
        </nav>
        
      </header>
      
    </>
  );
};

export default Navbar;
