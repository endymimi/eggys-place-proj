import React from 'react'

const SearchBar = () => {
  return (
    <>
    <main>
    
            <div>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 md:hidden">
  
  
  <div className="carousel-item lg:hidden">
    <img
      src="https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-1_xwvwpo.svg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087331/burger-img-2_vjfta9.svg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-4_wvhmpj.svg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-5_qojpzu.svg"
      className="rounded-box" />
  </div>
</div>
            </div>

            <form className=" lg:hidden mb-20 my-30">
              <input
                type="text"
                className="w-full h-[60px] rounded-[32px] pl-6  border font-[400] text-[#100101] bg-[#F0F0F0]"
                placeholder="Search"
              />
            </form>
    </main>
    </>
  )
}

export default SearchBar