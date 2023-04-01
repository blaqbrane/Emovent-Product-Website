import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
    return (
        <nav className='fixed top-0 z-10 left-0 w-full bg-[white]' >
            <div className="flex flex-row justify-between items-center bg-[white] text-[tomato] px-6 py-4  md:px-32 ">
                <h1 className='text-xl font-serif'>Emovent</h1>
                <ul className="hidden md:flex items-center gap-x-3">
                    <li className="cursor-pointer hover:text-[gray]"><a href='#hero'>Home</a></li>
                    <li className="cursor-pointer hover:text-[gray]"><a href='#about'>About</a></li>
                    <li className="cursor-pointer hover:text-[gray]"><a href='#contact'>Contact</a></li>
                </ul>
                <button className="hidden md:block border border-[tomato] px-3 py-1 rounded-full">Get Started</button>
                <button className="block md:hidden" style={{ backgroundColor: 'tomato', color: "white", padding: "5px 8px" }} onClick={() => setIsopen(!isopen)} >
                    {isopen ? <FaTimes size={20} /> : <GiHamburgerMenu size={20} />}
                </button>
               
                <ul onClick={() => setIsopen(false)} className={isopen ? 'absolute top-0 text-[white] left-0 w-[50%] h-screen text-white p-4 flex flex-col bg-[tomato] ease-in-out duration-500 space-y-10 cursor-pointer md:hidden' :'left-[-100%] hidden'} >
                   <li ><a href='#hero'>Home</a></li>
                   <li> <a href='#about'>About</a></li> 
                   <li><a href='#contact'>Contact</a></li>  
                    
                   
               </ul>
               
            </div>

               
               
            


        </nav>
    )
}
export default Navbar