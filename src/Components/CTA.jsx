import React from 'react'
import { FaUserLock, FaShippingFast } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md'
const cta = [
  {
    id:1,
    icon:<FaShippingFast size={23}/>,
    title:"Free Shipping",
    text:"No hidden or extra charge"
  },
  {
    id:2,
    icon:<BsFillRocketTakeoffFill size={23}/>,
    title:"100% Guarantee",
    text:"No hidden or extra charge"
  },
  {
    id:3,
    icon:<MdOutlinePayment size={23}/>,
    title:"Secured Payment",
    text:"No hidden or extra charge"
  }
]
const CTA = () => {
  return (
    <section className='bg-tertiary px-6 py-4  md:px-32 '>
      <div className='grid gap-x-5 md:grid-cols-3'>
        {cta.map((item) => (
          <div key={item.id} className='flex flex-col my-10'>
            <div className='flex flex-col justify-center items-center md:flex-row'>
              <p className='px-3 h-fit rounded text-[tomato] bg-[white] py-2 2'>{item.icon}</p>
              
              <div className='ml-2 mt-4'>
              <p className='text-secondary text-xl mb-2 md:text-sm'>{item.title}</p>
              <p className='text-sm text-[gray] md:text-xs'>{item.text}</p>
              </div>
            </div>
            
          </div>
        ))}

      </div>

    </section>
  )
}

export default CTA
