import React from 'react'
import { useState } from 'react'
import Image3 from '../Static/watch-pack.png'
const Discount = () => {
  const [shopNow, setShopNow] = useState(false)
  const handleClick = () => {
    setShopNow(true)
    setTimeout(() => {
      setShopNow(false)
    }, 2000)
  }
  return (
    <main className='flex flex-col mt-20 bg-tertiary px-6 py-10 md:flex-row md:px-32'>
      <div className="md:w-1/2">
        <h5 className='text-[tomato] text-xs mb-8'>LIMITED TIME OFFER</h5>
        <h1 className='text-4xl mb-8 text-secondary'>Discount 50% On All MX20 Model Product</h1>
        <p className='mb-10 text-[gray] md:max-w-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt omnis placeat adipisci maxime sit vitae ipsa. Nisi cum ipsum tempore eos! Voluptate, necessitatibus quam harum dignissimos cupiditate eius fugiat non.
        </p>
        <>
          {
            !shopNow ?
              <button onClick={handleClick} className="px-10 bg-[tomato] py-3 mb-10 text-[white]">Shop Now</button>
              :
              <div className='mb-10'>
                <h1 className='text-[tomato] text-xl'>We Are Out Of Stock At the Moment!!!</h1>
              </div>
          }
        </>



      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col justify-center items-center mx-auto w-[290px] h-[290px]  md:mt-10 md:ml-0">
          <img src={Image3} alt="Watch" className='w-full h-full object-contain' />
        </div>

      </div>
    </main>
  )
}

export default Discount
