import React from 'react'
import SearchBar from '../utils/SearchBar'
import BurgerSession from '../layouts/BurgerSession'
import Products from '../layouts/Products'

const Home = () => {
  return (
   <>
   <main className='bg-[#2F2F2F]'>
    <article className='wrapper'>
      <section>
        <div>
          <SearchBar/>
        </div>
        {/* product div */}
        <div>
         <BurgerSession/> 
        </div>
        <div>
          <Products/>
        </div>

      </section>

    </article>

    
   </main>
   </>
  )
}

export default Home