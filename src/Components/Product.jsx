import React from 'react'
import images from '../Static/watch-img-1.jpg'
const Product = () => {
  return (
    <section className='px-6 py-4 md:px-32 '>
         <div className="text-center">
            <h4 className='text-[tomato] text-xs mb-8'>PRODUCT DEMO</h4>
            <h1 className='text-4xl mb-8 text-secondary'>Get Product More Information From The Video</h1>
            <p className='text-[gray]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
            </p>
        </div>
        <div className='p-10 mx-auto max-w-[500px] w-[94vw] '>
          <img src={images} alt="image" className='w-[400px] h-[270px] border border-[gray] rounded-xl'/>
        </div>
    </section>
  )
}

export default Product
