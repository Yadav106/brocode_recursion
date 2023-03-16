import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import SingleProd from './SingleProd'

const Products = (props) => {
  return (
    <div className={`
        flex
        flex-wrap
        gap-[20px]
        justify-center
        items-center
        mt-[75px]
    `}>
        {
            props.products.map(item => {
                return <SingleProd item={item} key={item.product_title}/>
            }) 
        }
    </div>
  )
}

export default Products