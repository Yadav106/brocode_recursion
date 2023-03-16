import React from 'react'
import logo from './images/logo.svg';



const Header = () => {
    const directToLogin = () =>{
        
    }
  return (
    <header className='shadow-lg '>
        <nav className='flex justify-between px-36 pt-10 text-xl p-4 w-full'>
            <section>
                <img src={logo} alt="" className='w-52'/>
            </section>
            <section className='flex justify-center items-center gap-5'>
                <ul className='flex gap-5'>
                    <li className='hover:text-[#ff6c02] '><a href="#home">Home</a></li>
                    <li className='hover:text-[#ff6c02] '><a href="#">Intro</a></li>
                    <li className='hover:text-[#ff6c02] '><a href="#">Features</a></li>
                    <li className='hover:text-[#ff6c02] '><a href="#">Contact</a></li>
                </ul>
                <button className='bg-[#1e266d] rounded-full text-white px-3 py-1 hover:border-1 hover:outline hover:outline-[#1e266d] hover:bg-inherit hover:text-[#1e266d]' onClick={directToLogin}>Get Started </button>
            </section>
        </nav>
    </header>
  )
}

export default Header