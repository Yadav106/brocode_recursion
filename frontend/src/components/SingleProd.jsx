import React, {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion'

const SingleProd = (props) => {
    return <div
    className={`
        h-[400px]
        w-[300px]
        bg-[#23272A]
        mt-[20px]
        cursor-pointer
        hover:shadow-2xl
        hover:scale-105
    `}>
    <img src={props.item.product_photo} className='h-[250px] w-[300px]'/>
    <p className='text-[20px] text-center text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_title}</p>
    <div className='flex justify-between mx-[25px]'>
        <p className='text-[20px] text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_price}</p>
        <div className='flex items-center justify-center'>
            <p className='text-[20px] text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_star_rating}</p>
            <AiFillStar className='text-[20px] mt-[15px] text-white overflow-hidden h-[25px]'/>
        </div>
    </div>
    <div className='flex justify-around mt-[15px]'>
        <button className='text-white border-white border-[1px] p-[10px] hover:bg-white hover:text-black'>Buy Now</button>
        <button className='text-white border-white border-[1px] p-[10px] hover:bg-white hover:text-black'
            onClick={() => {
                props.setWishlist([...props.wishlist, props.item])
            }}
        >
            Add To Cart
        </button>
    </div>
</div>
}

export default SingleProd