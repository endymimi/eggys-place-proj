import React from "react";
import navLogo from "../assets/eggysPlaceBurger.png";
import location from "../assets/location.png";
import dropdownIcon from "../assets/dropDownIcon.svg";
import cartImg from "../assets/cartImg.png";
import loginImg from "../assets/login icon.png";
import { useState } from "react";
import dropupIcon from "../assets/arrow up.png";


const Navbar = () => {
 const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <header className="bg-[#100101]">
        <nav className=" wrapper flex justify-between items-center">
          <div className="flex gap-4 items-center ">
            <img className=" h-auto" src={navLogo} alt="nav-logo" />
            <img
              className=" md:w-7 h-auto w-8"
              src={location}
              alt="location-icon"
            />
            <h2 className="text-[#F0F0F0] text-[20px]  hidden md:block font-[500]">
              Location
            </h2>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className=" m-1 bg-transparent">
                <button  onClick={() => setDropDown(dropDown)}>
                  <img src={dropDown ? dropupIcon : dropdownIcon}  alt="toggle dropup" className=" md:mt-3 mt-3 w-10" /></button>
                
              </div>
             
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Lagos</a>
                </li>
                <li>
                  <a>Abuja</a>
                </li>
                <li>
                  <a>Benin</a>
                </li>
              </ul>
              
            </div>
            {/* <img src={dropdown} alt="dropdown" /> */}
          </div>
          <div className="flex gap-8">
            <form className="">
              <input
                type="text"
                className="w-[300px] h-[45px]  hidden lg:block rounded-[32px] ps-[30px] border font-[400] text-[#100101] bg-[#F0F0F0] ml-12 my-10"
                placeholder="Search"
              />
            </form>
            <div className="flex">
              <h2 className="text-[#F0F0F0] my-13  mr-10 text-[20px] font-[500] whitespace-nowrap hidden md:block">
                All Products
              </h2>

              <div className="flex gap-3 ">
                <button className="bg-[#B67B0F] text-white font-medium rounded-full md:rounded-full md:w-25 md:h-10 w-14 h-10  items-center flex gap-1 my-10">
                  <img
                    className=" ml-2 "
                    src={cartImg}
                    alt="cart-icon"
                  />
                  <span className="hidden lg:inline-block ">Cart</span>{" "}
                  <span className="pr-6">01</span>
                </button>
                <button className="bg-[#F0F0F0] font-medium md:rounded-full rounded-full md:w-25 w-12 h-10 md:h-10  items-center flex gap-1 my-10">
                  <img
                    className=" text-[#100101] pl-2 w-10"
                    src={loginImg}
                    alt="cart-icon"
                  />
                  <span className="hidden md:block">Login</span>
                </button>
                <div>
                
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
