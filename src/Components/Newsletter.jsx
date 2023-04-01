import React, { useState } from 'react'

const Newsletter = () => {
  const[email,setEmail] = useState('')
  const[success,setSuccess] = useState(false)
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
    <section className='px-6 py-4 bg-tertiary md:px-32'>
      <div className="text-center">
        <h4 className='text-[tomato] text-xs mb-8'>NEWSLETTER</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Subscribe Our Newsletter</h1>
        <p className='text-[gray]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
        </p>
      </div>
      <>
      {
          success ? 
          <div className='mt-10 mb-8 text-[tomato]'>
            <h1>Thanks For Subscribing!!!</h1>
          </div>
          :
          <form onSubmit={handleSubmit} className='mt-10 flex items-center mb-8 max-w-[440px] mx-auto'>
          <input className='px-8 py-3 outline-none w-full' type="email" required value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
          <button className='bg-[tomato] text-[white] py-3 px-5' type='submit'>Submit</button>
        </form>
      }
      </>
     
    </section>
  )
}

export default Newsletter
