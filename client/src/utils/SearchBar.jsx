import React from 'react'

const SearchBar = () => {
  return (
    <>
    <main>
    <form className=" lg:hidden py-7 ">
              <input
                type="text"
                className="w-full h-[45px] rounded-[32px]  border font-[400] text-[#100101] bg-[#F0F0F0]"
                placeholder="Search"
              />
            </form>
    </main>
    </>
  )
}

export default SearchBar