import React from 'react'

const SearchBar = () => {
  return (
    <>
    <main>

    {/* <form className=" lg:hidden mb-20 my-30">
              <input
                type="text"
                className="w-full h-[60px] rounded-[32px] pl-6  border font-[400] text-[#100101] bg-[#F0F0F0]"
                placeholder="Search"
              />
            </form> */}
    
            <div>
            <div className="carousel rounded-box w-96 hidden md:none">
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
      className="w-[140px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
      className="w-[120px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
      className="w-[120px]" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
      className="w-full" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chips_yn9jhf.svg"
      className="w-full" />
  </div>
  <div className="carousel-item w-1/2">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
      className="w-full" />
  </div>
  
</div>
            </div>

            
    </main>
    </>
  )
}

export default SearchBar
