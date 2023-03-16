import React from 'react';
import header from './images/header.png';
import intro from './images/introduction.jpg'



const Landingpage = () => {
  return (
    <div>
      <section id="#home">
            <div className='flex justify-center mt-24'>
                <div className='flex max-w-7xl items-center justify-between' > 
                    <div className='flex flex-col w-1/3'>
                      <h1 className='text-6xl font-bold text-[#1e266d]'>Lorem ipsum dol or sit amet cons ec tetur adipis</h1>
                      <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                      <div className='pt-7 flex justify-between'>
                        <a  href="sign-up.html" className='bg-[#ff6c02] px-7 py-4 w-5/12 text-center rounded-full text-white text-lg hover:bg-inherit hover:text-[#ff6c02] hover:outline-[#ff6c02] hover:outline'>Sign up for free</a>
                        <a  href="#intro" className='text-lg text-[#ff6c02] px-7 py-4 w-5/12 text-center bg-inherit outline outline-[#ff6c02] rounded-full hover:text-white hover:bg-[#ff6c02] '>Discover</a>
                      </div>
                    </div> 
                    <div >
                      <img  src={header} alt="alternative" className='w-full' />
                    </div> 
                </div> 
            </div> 
        </section> 
        <section className='flex justify-center mt-20'>
          <section className='flex max-w-7xl justify-between'>
            <div>
              <img src={intro} alt="" />
            </div>
            <div className='w-1/3'>
              <h2 className='text-5xl font-bold text-[#1e266d]'>Adipiscing elit duis tristi quesolli citudin nibro</h2>
              <p className='pt-5'>In nulla posuere sollicitudin aliquam ultrices sagittis. Id fauc ibus nisl tincidunt eget nullam non nisi. Cursus in hac habi tasse platea dictumst quisque sagittis purus. Mi proin se dlibero enim sed. Consectetur adipiscing elit sena</p>
              <button className=' mt-5 bg-[#ff6c02] px-7 py-3 w-1/3 text-center rounded-full text-white text-lg hover:bg-inherit hover:text-[#ff6c02] hover:outline-[#ff6c02] hover:outline'>Sign up</button>
            </div>
          </section>
        </section>

        <section className='mt-14 mb-24'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-[#1e266d]'>Donec ultrices tincidunt</h1>
            <p class="text-xl w-5/12 mt-3">Sodales neque sodales ut libero volutpat sed cras <a href="#your-link">@name</a> ornare arcu dui vivamus arcu vel turpis nunc eget lorem dolor sed viverra</p>
          </div>
          <div className=''>
            <div className='flex justify-center mt-10'>
              <input type="email" placeholder='Email address' className='outline-1 outline-black bg-[#EEEEEE] text-xl w-1/4 px-10 py-3 rounded-l-full'/>
              <button className='bg-[#ff6c02] px-7 py-3 rounded-r-full text-white text-xl '>Send</button>
            </div>
          </div>
          <div>
            
          </div>
        </section>
    </div>
  )
}

export default Landingpage
