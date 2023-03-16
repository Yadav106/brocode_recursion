import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'

const Footer = () => {
  return (
    <div>

      <footer className='bg-[#f9f9f9] flex justify-evenly items-center p-5'>
        <div className='w-1/4'>
          <h1>Lorem ipsum</h1>
          <p className=''>Dui vivamus arcu felis bibendum ut tristique et egestas. Dictum sit amet justo donec enim. Parturient montes nascetur ridiculus mus mauris</p>
        </div>
        <div>
          <h1>Links</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-3'>
            <li className=''><a href=""><AiOutlineInstagram /></a></li>
            <li className=''><a href=""><CiFacebook /></a></li>
            <li className=''><a href=""><AiOutlineTwitter /></a></li>
          </ul>
        </div>
      </footer>
      <p className='text-center text-xl p-2 bg-[#f9f9f9]'>Copyrights &copy; Reserved</p>
    </div>
  )
}

export default Footer
