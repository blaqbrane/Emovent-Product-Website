import React, { useEffect, useState } from 'react'
import watch from '../Static/watch-5.png'
import { FaQuoteRight } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { testimonial } from './data'
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = testimonial.length
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  useEffect(() => {
    const new_interval = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }, 3000)
    return () => clearInterval(new_interval)
  }, [currentIndex])
  return (
    <main className='px-6 py-4 md:px-32'>
      <div className="text-center">
        <h4 className='text-[tomato] text-xs mb-8'> TESTIMONIALS</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Our Customer Feedback</h1>
        <p className='text-[gray]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
        </p>
      </div>
      <div>
        {testimonial.map((item) => (
          <div key={item.id} className={item.id === currentIndex ? "border border-[#c0bbbb] max-w-[400px] mx-auto rounded-md mt-6 ease-in-out duration-500 hover:scale-105   " : "hidden"} >
            <p className='flex flex-col items-center mt-7 mb-3 text-5xl font-bold text-[tomato]'><FaQuoteRight/></p>
            <p className='text-center text-[gray]'>{item.text}</p>
            <div className='text-[#ffbb3e] flex flex-row justify-center gap-2 mt-6 items-center'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            </div>
            <div className='flex flex-col justify-center items-center mt-10' >
              <div className='w-[180px] h-[180px]'>
                <img src={item.img} alt="image" className='w-full h-full object-cover rounded-full' />
              </div>
              <h1 className='text-xl mt-8 font-bold text-secondary'>{item.author}</h1>
              <p className='text-2xl mb-20 text-secondary'>{item.role}</p>
            </div>
          </div>

        ))}


      </div>
      <div className='mx-auto max-w-[400px] flex justify-center mt-4 '>
        {testimonial.map((items) => {
          return (<button key={items.id} onClick={() => setCurrentIndex(items.id)} style={{ background: currentIndex === items.id ? "gray" : "tomato" }} className='w-4 rounded-full bg-[tomato] h-4'></button>)
        })}
      </div>


    </main>
  )
}

export default Testimonials
