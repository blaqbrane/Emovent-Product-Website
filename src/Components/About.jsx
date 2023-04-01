import React, { useState } from 'react'
import { abouts } from './data'
import { FaCheck } from 'react-icons/fa'
import image2 from '../Static/dual-watch.png'
const About = () => {
  const[isShow,setIsShow] = useState(false)
  const desc = 'Lorem ipsum dolor, sit amet consectetur adipis. mvmvm . Aliquam praesentium est perspiciatis explicabo fugiat dolor quam nulla ab velit architecto. In, autem inventore blanditiis itaque perferendis eos nulla ea repellendus Aliquam praesentium est perspiciatis explicabo fugiat dolor quam nulla ab velit architecto. In, autem inventore blanditiis .'
  return (
    <main id='about' className='flex flex-col px-6 py-10 md:px-32 md:flex-row-reverse'>
         <div className="md:w-1/2">
            <h4 className='text-[tomato] text-xs mb-8 '>ABOUT THE PRODUCT</h4>
            <h1 className='text-4xl mb-8 text-secondary '>Awesome Digital Watch Can Make Your Life Easier</h1>
            <p className='mb-2 text-[gray]  md:max-w-md'>
                {isShow ? desc : desc.substring(0, 160)}
            </p>
            <div className=" grid grid-cols-2">
              {abouts.map((about) => (
                <div key={about.id} className='flex items-center text-secondary gap-1 mt-8'>
                 <FaCheck style={{color:'tomato'}}/> {about.text}
                </div>
              ))}
            </div>
            <div className="mt-10 mb-5 flex justify-center md:justify-start">
                <button onClick={() => setIsShow(!isShow)} className="px-10 bg-[tomato] py-3 text-[white]">{isShow ? "Read Less" : "Read More"}</button>
            </div>
           
        </div>
        <div className='md:w-1/2'>
            <div className="flex flex-col justify-center items-center mx-auto w-[290px] h-[290px] mt-12 md:w-[350px] md:h-[350px]">
                <img className="w-full h-full object-contain" src={image2} alt="Watch2"/>
            </div>
            
        </div>
    </main>
  )
}

export default About
