import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CatalogNav = (props) => {
  return (
    <nav
        className={`
            flex
            bg-[#23272A]
            h-[75px]
            w-[100vw]
            fixed
            p-[15px]
            top-0
        `}
    >
        <div className='flex justify-between items-center w-[100vw]'>
            <h1 className='text-4xl font-bold text-white cursor-pointer' onClick={() => props.setSearched(false)}>{`Bro>>Shop`}</h1>
            <div className='flex justify-center items-center gap-[10px] bg-zinc-300 h-[60px] rounded-3xl p-[10px]'>
                <input type='text' className={`
                    rounded-3xl
                    p-[10px]
                    text-[20px]
                    w-[650px]
                `}
                onChange={(e) => props.setSearchText(e.target.value)}/>
                <BiSearchAlt className='text-4xl text-[#23272A] cursor-pointer hover:text-black' onClick={() => {
                    props.getData(props.searchText)
                }}/>
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