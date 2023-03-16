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
    `}
    onClick={() => {
        console.log(props.item);
        setWidth(() => {
            if(width === 300){
                return 900
            }else{
                return 300
            }
        })
        setPosition(() => {
            if(position === ''){
                return 'absolute'
            }else{
                return ''
            }
        }
        )
    }}

>
    <img src={props.item.product_photo} className='h-[250px] w-[300px]'/>
    <p className='text-[20px] text-center text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_title}</p>
    <div className='flex justify-between mx-[25px]'>
        <p className='text-[20px] text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_price}</p>
        <div className='flex items-center justify-center'>
            <p className='text-[20px] text-white mt-[10px] overflow-hidden h-[25px]'>{props.item.product_star_rating}</p>
            <AiFillStar className='text-[20px] mt-[15px] text-white overflow-hidden h-[25px]'/>
        </div>
    </div>
</div>
}

export default SingleProd