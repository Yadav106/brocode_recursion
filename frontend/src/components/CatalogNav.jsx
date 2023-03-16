import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CatalogNav = () => {
  return (
    <nav
        className={`
            flex
            bg-[#ff6c02]
            h-[75px]
            sticky
            p-[15px]
        `}
    >
        <div className='flex justify-between items-center w-[100vw]'>
            <h1 className='text-4xl font-bold text-white'>{`Bro>>Shop`}</h1>
            <div className='flex justify-center items-center gap-[10px] bg-zinc-300 h-[60px] rounded-3xl p-[10px]'>
                <input type='text' className={`
                    rounded-3xl
                    p-[10px]
                    text-[20px]
                    w-[650px]
                `}/>
                <BiSearchAlt className='text-4xl text-[#ff6c02] cursor-pointer hover:text-black'/>
            </div>
            <div className='flex justify-center items-center gap-[20px]'>
                <AiOutlineShoppingCart className='text-4xl text-white cursor-pointer hover:text-black'/>
                <HiMenuAlt3 className='text-4xl text-white cursor-pointer hover:text-black'/>
            </div>
        </div>
    </nav>
  )
}

export default CatalogNav