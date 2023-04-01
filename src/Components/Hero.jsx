import React, { useState } from 'react'
import Image1 from "../Static/watch-img-1.png"
const Hero = () => {
    const[shopNow,setShopNow] = useState(false)
    const handleClick=()=>{
        setShopNow(true)
        setTimeout(() => {
            setShopNow(false)
        },2000)
    }
  return (
    
   
    <main id='hero' className='flex flex-col mt-20 bg-primary px-6 py-5 md:flex-row md:px-32'>
       <div className="text-center md:text-left md:w-1/2">
            <h5 className='text-[tomato] text-xs mb-8'>30% OFF FOR LIMITED TIME</h5>
            <h1 className='text-4xl mb-8 text-secondary'>Best Fashionable Digital Watch.</h1>
            <p className='mb-10 text-[gray] md:max-w-sm'>
                Lorem ipsum dolor, adipisicing elit. Sunt omnis placeat adipisci maxime sit vitae ipsa. Nisi cum ipsum tempore eos! Voluptate, necessitatibus quam harum dignissimos cupiditate eius fugiat non.
            </p>
            <>
            {!shopNow ?
            <div className="mb-10">
                <button onClick={handleClick} className="px-10 bg-[tomato] py-3 text-[white]">Shop Now</button>
                <span className='ml-2 text-secondary'>Strating at $128</span>
            </div>
            :
            <div className='mb-10'> 
                <h1 className='text-[tomato] text-xl'>We Are Out Of Stock At the Moment!!!</h1>
            </div>
            }
            </>
        </div>
       
        <div className="md:w-1/2">
            <div className="flex flex-col justify-center items-center mb-5 mx-auto w-[260px] h-[250px] md:mb-0 md:w-[300px] md:h-[300px]">
                <img src={Image1} alt="Watch" className='w-full h-full object-contain'/>
            </div>
            
        </div>
    </main>
  )
}

export default Hero
