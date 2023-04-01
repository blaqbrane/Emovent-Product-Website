import React from 'react'
import products from './data'
import { useState, useEffect } from 'react'
import { BsInboxesFill, BsArrowLeft, BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [buyNow, setBuyNow] = useState(false)
  const length = products.length
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }
 
  const handleClick = () => {
    setBuyNow(true)
    setTimeout(() => {
      setBuyNow(false)
    }, 2000)
  }

  useEffect(() => {
    const new_interval = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }, 3000)
    return () => clearInterval(new_interval)
  }, [currentIndex])
  return (
    <main className='bg-tertiary px-6 py-4 md:px-32'>
      <div className="text-center">
        <h4 className='text-[tomato] text-xs mb-8'> OUR PRODUCTS</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Our Excellent And High Quality Products.</h1>
        <p className='text-[gray]'>
          Lorem ipsum dolor sit amet modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
        </p>
      </div>
      <div className='mt-10'>
        {products.map(({id,img,name,price}) => (
          <div key={id} className={id === currentIndex ? "max-w-[400px] mx-auto mb-5 mt-10 px-10 py-2 text-center rounded-lg bg-[white]" : "hidden" }>
            <div className='flex flex-col justify-center mt-10 items-center w-[250px] h-[250px] md:w-[300px]'>
              <img src={img} alt='Watch' className='mt-6 w-full h-full object-contain'/>
            </div>
            <h3 className='mt-12 mb-6 text-xl text-secondary'>{name}</h3>
            <div className='text-[#ffbb3e] flex flex-row justify-center gap-2 items-center'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            </div>
            <h4 className='text-[blue] mt-4 mb-10'> {price}</h4>
            <>
              {!buyNow ?
               <button onClick={handleClick} className="px-7 mb-12 bg-[tomato] py-2 rounded-md text-[white]">Buy Now</button>
               :
               <div className='mb-10'>
                <h1 className='text-[tomato] text-xl'>We Are Out Of Stock At the Moment!!!</h1>
              </div>
              }
            </>
           
          </div>
        ))}
        {/* Add icon */}
        <div className='flex flex-row justify-center items-center  gap-4 text-[tomato]'>
          <button onClick={handlePrev}><BsArrowLeftSquareFill size={33}/></button>
          <button onClick={handleNext}><BsArrowRightSquareFill size={33}/></button>
        </div>
      </div>
    </main>
  )
}

export default ProductCarousel
