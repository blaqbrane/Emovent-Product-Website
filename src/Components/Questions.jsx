import React from 'react'
import { question } from './data'
const Questions = () => {
  return (
    <section className=' px-6 py-4 bd-[white] md:px-32 '>
      <div className="text-center">
        <h4 className='text-[tomato] text-xs mb-8'>POPULAR QUESTIONS</h4>
        <h1 className='text-4xl mb-8 text-secondary'>Frequently Asked Questions</h1>
        <p className='text-[gray]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
        </p>
      </div>
      <div className='grid grid-cols-2 mx-auto max-w-[500px] mt-10 gap-y-10 gap-x-5 md:max-w-[967px]'>
        {question.map(({ id, text, title }) => (
          <div key={id}>

            <h4 className='text-left text-xl mb-2 text-secondary md:text-md'>{title}</h4>

            <p className='text-sm text-left text-[gray]'>{text}</p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Questions
