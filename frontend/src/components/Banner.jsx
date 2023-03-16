import React, { useState } from 'react'
import categories from './categories'

const Banner = (props) => {

    const [category, setCategory] = useState(categories)

    return (
        <div className='mt-[75px]'>
            <img src='/banner.jpg' alt='banner' className='w-[100vw] h-[300px] object-cover' />
            <h1 className='text-4xl font-bold text-center mt-[20px]'>Shop for</h1>
            <div className='flex gap-[10px] justify-center mt-[20px]'>
                {
                    category.map(item => {
                        return <div key={item.id} className={`
                            flex
                            flex-col
                            h-[350px]
                            w-[300px]
                            bg-[#23272A]
                            rounded-3xl
                            border-[2px]
                            border-black
                            hover:shadow-black
                            hover:shadow-2xl
                            cursor-pointer
                        `}
                        onClick={() => {
                            props.setSearchText(item.cat)
                            props.getData(item.cat)
                        }}
                        >
                            <img src={item.img} className='h-[300px] w-[300px] object-cover rounded-t-3xl'/>
                            <h1 className='text-2xl font-bold text-center text-white mt-[10px]'>{item.cat}</h1>
                        </div>
                    })
                }
            </div>
            <h1 className='text-4xl font-bold text-center mt-[20px]'>And more....</h1>
        </div>
    )
}

export default Banner