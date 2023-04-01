import React from 'react'
import { FaArrowUp, FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaCopyright } from 'react-icons/fa'
import { useState } from 'react'
const Footer = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
    console.log(email)
    setEmail('')
  }
  return (
    <footer className='bg-tertiary'>
      <main className='px-6 py-4  md:px-32'>
        <div className='flex flex-col mt-10 md:flex-row md:gap-x-4'>
          <div className='md:w-1/2'>
            <h1 className='text-[tomato] mb-3 text-3xl'>Emovent</h1>
            <p className='text-secondary max-w-sm mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cum at dignissimos rerum nihil non nemo suscipit iusto. Vel reiciendis eaque inventore assumenda quisquam ipsa corporis dolorem molestiae eveniet natus!</p>
            <ul className='space-y-6 text-[gray]'>
              <li>Contact Us</li>
              <li>Customer Service</li>
              <li>Term & Condition</li>
              <li>FAQs</li>

            </ul>
          </div>
          <div className='md:w-1/2'>
            <ul className='space-y-6 mt-5 text-secondary mb-10'>
              <li>Our Products</li>
              <li>Refund Policy</li>
              <li>Payment Methods</li>
              <li>Privacy & Policy</li>
            </ul>
            {
              success ?
                <div className='mt-10 mb-8 text-[tomato]'>
                  <h1>Thanks For Subscribing!!!</h1>
                </div>
                :
                <form onSubmit={handleSubmit} className=''>
                  <div className='py-2 bg-[white] px-4 rounded-full flex '>
                    <input className='w-full outline-none' type="email" value={email} required placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                    <button type='submit' className='bg-[tomato] text-[white] py-1 px-4 rounded-full'>Subscribe</button>
                  </div>

                </form>
            }
            <p className='w-fit absolute mt-2 right-6 px-3 py-2 rounded-md bg-[white]'><a href='#hero'><FaArrowUp/></a></p>
            <p className='text-secondary text-2xl mt-3 mb-6'>Follow Us</p>
            <div className='flex items-center justify-between mt-8'>
              <p className='px-3 py-2 rounded-md bg-[white]'><FaFacebook /></p>
              <p className='px-3 py-2 rounded-md bg-[white]'><FaTwitter /></p>
              <p className='px-3 py-2 rounded-md bg-[white]'><FaGoogle /></p>
              <p className='px-3 py-2 rounded-md bg-[white]'><FaLinkedin /></p>



            </div>
          </div>

        </div>
      </main>
      <hr className='text-[#ddd9d9]' />
      <p className='flex justify-center py-4 items-center text-center'><span className='mr-1'><FaCopyright /></span> 2023 Emovent, All Rights Reserved By <em className='ml-1 text-[tomato]'>Blaqbrane</em></p>
    </footer>
  )
}

export default Footer
