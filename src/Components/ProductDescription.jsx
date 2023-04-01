import React from 'react'
import image2 from '../Static/watch-img-1.jpg'
import { FaAward } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { FcOnlineSupport } from 'react-icons/fc'

const ProductDescription = () => {
  return (
    <main className='flex flex-col px-6 py-10 md:px-32 md:flex-row-reverse'>
      <div className="md:w-1/2">
        <h4 className='text-[tomato] text-xs mb-8'>WHY CHOOSE OUR PRODUCT</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Choose Our Best & Fashionable Products</h1>
        <p className='mb-8 text-[gray] md:max-w-md'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt omnis placeat adipisci maxime sit vitae ipsa. Nisi cum iplicabo fugiat dolor quam nulla ab velit architecto. In, autem inventore blanditiis itaque perferendis eos nulla ea repellendus.

        </p>
        <div className="flex flex-col space-y-3">
          <div className='flex items-center'>
            <span className='text-[tomato] mr-2'><FaAward size={23}/></span>
            <p className='text-secondary'>Our all products,are high quality,colorful and ashionable.</p>
          </div>
          <div className='flex items-center'>
            <span className='text-[tomato] mr-2'><AiFillGift size={23}/></span>
            <p className='text-secondary'>Lifetime guarantee is available for all new and old products.</p>
          </div>
          <div className='flex items-center'>
            <span className='text-[tomato] mr-2'><RiSecurePaymentLine size={23}/></span>
            <p className='text-secondary'>Easy and high secured payment system with no gateway.</p>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'><FcOnlineSupport size={23}/></span>
            <p className='text-secondary'>We are providing 24 hours dedicated support for our customers.</p>
          </div>
        </div>


      </div>
      <div className='md:w-1/2'>
        <div className="flex flex-col justify-center items-center mx-auto w-[290px] h-[290px] mt-32 md:w-[350px] md:h-[350px]">
          <img className="w-full h-full object-contain" src={image2} alt="Watch2" />
        </div>

      </div>
    </main>
  )
}

export default ProductDescription
