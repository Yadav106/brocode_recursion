import React from 'react';
import header from './images/header.png';
import intro from './images/introduction.jpg'
import { useState } from 'react';
import Login from './Login';

const First = () => {
    return (
        <div>
            <section id="#home">
                <div className='flex justify-center mt-24'>
                    <div className='flex max-w-7xl items-center justify-between' >
                        <div className='flex flex-col w-1/3'>
                            <h1 className='text-6xl font-bold text-[#1e266d]'>{`Bro>>Shop`}</h1>
                            <p className='pt-5'>Enjoy the liberty of shopping</p>
                            <div className='pt-7 flex justify-between'>
                                <button className='bg-[#ff6c02] h-[50px] w-[200px] rounded-full text-[20px] text-white hover:text-[#ff6c02] hover:outline hover:outline-[#ff6c02] hover:bg-inherit'>Log In</button>
                            </div>
                        </div>
                        <div >
                            <img src={header} alt="alternative" className='w-full' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center mt-20'>
                <section className='flex max-w-7xl gap-[200px]'>
                    <div>
                        <img src={intro} alt="" />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text-5xl font-bold text-[#1e266d]'>No account?</h2>
                        <p className='pt-5'>You just require an email id to make an account!</p>
                        <button className='mt-[20px] bg-[#ff6c02] h-[50px] w-[200px] rounded-full text-[20px] text-white hover:text-[#ff6c02] hover:outline hover:outline-[#ff6c02] hover:bg-inherit'>Sign Up</button>
                    </div>
                </section>
            </section>
        </div>
    )
}

const LandingPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            {
                loggedIn ? <Login />:
                <First />
            }
        </div>
    )
}


export default LandingPage