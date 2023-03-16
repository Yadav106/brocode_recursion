import React, { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion'

const CartProd = (props) => {
    return <div
        className={`
        h-[400px]
        w-[300px]
        bg-white
        mt-[20px]
        cursor-pointer
        hover:shadow-2xl
        hover:scale-105
    `}>
        <img src={props.item.product_photo} className='h-[250px] w-[300px]' />
        <p className='text-[20px] text-center text-[#23272A] mt-[10px] overflow-hidden h-[25px]'>{props.item.product_title}</p>
        <div className='flex justify-between mx-[25px]'>
            <p className='text-[20px] text-[#23272A] mt-[10px] overflow-hidden h-[25px]'>{props.item.product_price}</p>
            <div className='flex items-center justify-center'>
                <p className='text-[20px] text-[#23272A] mt-[10px] overflow-hidden h-[25px]'>{props.item.product_star_rating}</p>
                <AiFillStar className='text-[20px] mt-[15px] text-[#23272A] overflow-hidden h-[25px]' />
            </div>
        </div>
        <div className='flex justify-around mt-[15px]'>
            <button className='text-[#23272A] border-[#23272A] border-[1px] p-[10px] hover:bg-[#23272A] hover:text-white'
                onClick={() => {
                    let new_cart = []
                    props.wishlist.forEach(element => {
                        if (element.product_title !== props.item.product_title) {
                            new_cart.push(element)
                        }
                    });
                    props.setWishlist(new_cart)
                }}
            >
                Remove Item
            </button>
        </div>
    </div>
}

const Cart = (props) => {
    const [sum, setSum] = React.useState(0)
    useEffect(() => {
        let temp = 0
        for(let i = 0; i < props.wishlist.length; i++){
            let price = props.wishlist[i].product_price
            price = price.replace('$', '')
            price = parseFloat(price)
            temp += price
        }
        setSum(temp)
    }, [props.wishlist])
    return (
        <motion.div className='mt-[75px] justify-center bg-[#23272A] p-[20px]'
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}

        >
            <h1 className='text-white text-4xl text-center'>Wishlist</h1>
            <div className='flex flex-wrap justify-center gap-[20px]'>
                {props.wishlist.map(item => {
                    return <CartProd item={item} key={item.product_title} wishlist={props.wishlist} setWishlist={props.setWishlist} />
                })}
            </div>
            <div className='flex justify-around mt-[30px]'>
                <button className='text-white border-white border-[1px] p-[10px] hover:bg-white hover:text-black'>
                    Checkout
                </button>
                <p className='text-white'>
                    ${
                        sum
                    }
                </p>
            </div>
        </motion.div>
    )
}

export default Cart