import React, { useState } from 'react'
import { GiScaleMail } from 'react-icons/gi'
 const contacts = [
  {
    id:1,
    icon:<GiScaleMail size={23}/>,
    text:"Address",
    para1: "Maount View, Oval Road",
    para2: "New York,USA"
  },
  {
    id:2,
    icon:<GiScaleMail size={23}/>,
    text:"Email",
    para1: "support@email.com",
    para2: "nnamanipeter58@gmail.com"
  },
  {
    id:3,
    icon:<GiScaleMail size={23}/>,
    text:"Phone",
    para1: "+91 1234567890",
    para2: "+94 1234567890"
  }
 ]
const Feedback = () => {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    },3000)
    setName('')
    setEmail('')
    setMessage('')
    console.log(name,email,message)
  }
  return (
    <>
    {
      success ? <h1 className='bg-primary p-10 text-[green]'>!!! Thanks For Contacting Us</h1>

    :
    <section id='contact' className=' px-6 py-4 bd-[white] md:px-32 '>
      <div className="text-center">
        <h4 className='text-[tomato] text-xs mb-8'>NEED HELP</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Contact With Us</h1>
        <p className='text-[gray]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
        </p>
      </div>
      <div className='grid md:grid-cols-2 md:gap-x-20 '>
        <form className='flex flex-col mt-6 ' onSubmit={handleSubmit}>
          <label className='text-secondary mb-2' htmlFor='user'>Name*</label>
          <input id='user' type='text' value={name} required onChange={(e) => setName(e.target.value)} placeholder='Name*' className='border mb-3 border-[#e7e0e0] px-3 py-2 rounded' />
          <label className='text-secondary mb-2' htmlFor='email'>Email*</label>
          <input id='email' type='email' value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='Email*' className='border mb-3 border-[#e7e0e0] px-3 py-2 rounded' />
          <label className='text-secondary mb-2' htmlFor='message'>Message*</label>
          <textarea id='message' placeholder='Write your message*' required value={message} onChange={(e) => setMessage(e.target.value)} className='border border-[#e7e0e0] p-3 rounded' />
          <button disabled={!name || !email || !message} className=' flex w-fit mt-6 rounded flex-col justify-start items-start px-10 bg-[tomato] py-3 text-[white]'>Submit Now</button>
        </form>
        <div className='mt-16 md:mt-10'>
         
          {contacts.map((item) => (
              <div key={item.id} className='mb-10'>
                <div className='flex'>
                  <span className='text-[tomato]'>{item.icon}</span>
                  <h3 className='ml-2 text-secondary text-xl'>{item.text}:</h3>
                </div>
                <p className='mt-4 text-[gray]'>{item.para1}</p>
                <p className='text-[gray]'>{item.para2}</p>
              </div>
            ))}
         
            
        </div>
      </div>
    </section>
}
    </>
  )
}

export default Feedback
