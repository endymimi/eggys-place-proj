import React from 'react'
import SearchBar from '../utils/SearchBar'
import BurgerSession from '../layouts/BurgerSession'
import Products from '../layouts/Products'
import Hero from "../features/Hero"

const Home = () => {

  return (
   <>
   <main className='bg-[#2F2F2F]'>
    <article className='wrapper'>
      <section>
        <div>
        <Hero/>
        </div>
        <div>
        
        </div>
        
        <div>
         {/* <BurgerSession/>  */}
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