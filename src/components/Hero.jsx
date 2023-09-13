import React from 'react'

const Hero = () => {
  return (
    // Main Div
    <div className=' max-w-[1640] mx-auto my-8  '> 
        {/* Container Div  */}
        <div className='max-h-[500px] relative'>
            {/* Div for the o */}
            <div className='absolute w-full h-full max-h-[500px] text-3xl sm:text:4xl md:text-5xl lg:text-6xl bg-black/40 flex flex-col justify-center'>
                <h1  className='font-bold text-4xl sm:text:5xl md:text-6xl lg:text-7xl  px-4 text-orange-500 justify-center'> Best <span className='text-white'> Resturant</span> </h1>   
                <h1 className='font-bold   text-4xl sm:text:5xl md:text-6xl lg:text-7xl px-4 text-orange-500 justify-center'>  <span className='text-white'>In</span> Addis Ababa </h1>
            </div>
            <img className='w-full h-[500px] object-cover' src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"  alt="Burger" />
        </div>
    </div>
  )
}

export default Hero