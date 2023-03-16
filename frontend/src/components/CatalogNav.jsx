import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ImFilter } from 'react-icons/im'

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
                <h1 className='text-4xl font-bold text-white cursor-pointer' onClick={() => {
                    props.setSearchText('')
                    props.setSearched(false)
                }}>{`Bro>>Shop`}</h1>
                <div className='flex justify-center items-center gap-[10px] bg-zinc-300 h-[60px] rounded-3xl p-[10px]'>
                    <input type='text' className={`
                    rounded-3xl
                    p-[10px]
                    text-[20px]
                    w-[650px]
                `}
                        value={props.searchText}
                        onChange={(e) => props.setSearchText(e.target.value)} />
                    <BiSearchAlt className='text-4xl text-[#23272A] cursor-pointer hover:text-black' onClick={() => {
                        props.getData(props.searchText)
                    }} />
                    {
                        props.searched && <ImFilter className='text-3xl text-[#23272A] cursor-pointer hover:text-black' />
                    }
                </div>
                <div className='flex justify-center items-center gap-[20px]'>
                    <div
                        className={`
                            text-white
                            flex
                            justify-center
                            items-center
                            text-[10px]
                            w-[17px]
                            h-[17px]
                            bg-red-500
                            p-[6px]
                            rounded-full
                            absolute
                            right-[65px]
                            top-[20px]
                        `}
                    >
                        {props.wishlist.length}
                    </div>
                    <AiOutlineShoppingCart className='text-4xl text-white cursor-pointer hover:text-zinc-500' onClick={
                        () => props.showCart(!props.cart)
                    } />
                    <HiMenuAlt3 className='text-4xl text-white cursor-pointer hover:text-zinc-500' />
                </div>
            </div>
        </nav>
    )
}

export default CatalogNav