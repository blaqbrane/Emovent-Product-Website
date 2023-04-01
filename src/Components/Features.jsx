import React from 'react'
import {FaCheckCircle, FaVideoSlash, FaWatchmanMonitoring} from 'react-icons/fa'
import {FiCodesandbox} from 'react-icons/fi'
import {MdNotificationsActive, MdOutlineMessage} from 'react-icons/md'
import {ImVideoCamera} from 'react-icons/im'
import {BsGlobe} from 'react-icons/bs'
import {SiAppstore} from 'react-icons/si'
 const features = [
  {
      id:1,
      title:"Attractive Design",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<FiCodesandbox size={22}/>
  },
  {
      id:2,
      title:"Notification Alert",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<MdNotificationsActive size={22}/>
  },
  {
      id:3,
      title:"Instant Video Call",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<ImVideoCamera size={22}/>
  },
  {
      id:4,
      title:"User Live Chat",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<MdOutlineMessage size={22}/>
  },
  {
      id:5,
      title:"GPRS Tracking",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<BsGlobe size={22}/>
  },
  {
      id:6,
      title:"Install Any App",
      text:"Lorem ipsum dolor sit amet consectetur sit etmus dunfer inmuns",
      icon:<SiAppstore size={22}/>
  }
]





const Features = () => {
  return (
    <section className='bg-tertiary px-6 py-4 md:px-32 '>
        <div className="text-center">
            <h4 className='text-[tomato] text-xs mb-8'>CORE FEATURES</h4>
            <h1 className='text-4xl mb-8 text-secondary'>The Watch Has Lots Of Excellent Features</h1>
            <p className='text-[gray]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum incidunt animi modi minus adipisci natus ipsam error dicta dolorem, consequatur commodi reprehenderit pariatur vero libero. Perspiciatis eligendi quo totam.
            </p>
        </div>
        <div className='grid grid-cols-2 mx-auto max-w-[420px] mt-10 gap-y-10 gap-x-5 md:max-w-[967px]'> 
            {features.map(({id,text,icon,title}) =>(
              <div key={id}>
                <div className='flex items-center mb-2'>
                  <span className='text-[tomato] '>{icon}</span>
                  <h4 className='ml-2 text-secondary text-sm md:text-md'>{title}</h4>
                </div>
                <p className='text-sm text-[gray]'>{text}</p>
               
              </div>
            ))}
        </div>
    </section>
  )
}

export default Features
