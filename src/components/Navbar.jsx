import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu ,AiOutlineSearch } from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite, MdHelp} from "react-icons/md"
import {FaUserFriends} from "react-icons/fa"
import {FaWallet} from "react-icons/fa"


const Navbar = () => {

    const [ nav , setNav ] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4' >
        {/*  Left Column  */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu 
                    onClick={() => setNav(!nav)}
                    size={30}/>
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-4'> 
                Gojo <span className='font-extrabold'> Foods  </span>
            </h1>

            <div className='hidden lg:flex items-center bg-gray-200 rounded-full ml-6 p-2 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>
                    Delivery
                </p>
                <p className='p-2'> Pickup</p>
            </div>
        </div>
            
        {/* Search Bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} />
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Foods' />
        </div>

        {/* Cart Button*/}
        <button className='bg-black text-white rounded-full hidden md:flex items-center py-2'>
            <BsFillCartFill 
                size={20} 
                className='mr-2 '/> Cart
        </button>

        {/* Mobile Menu */}
        {/* Oveylay */}
        <div className={ nav ? 'bg-black/80 fixed w-full h-screen z-10 top-0 left-0' : ""}>

        </div>

        <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 
        'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
           
           <AiOutlineClose
           onClick={() => setNav(!nav)}
            size={30}
            className='absolute right-4 top-4 cursor-pointer '
           />
           
            <h2 className='text-2xl p-4'>Gojo <span className='font-extrabold'>Foods</span>  </h2>

            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-lg py-2 flex'> 
                        <TbTruckDelivery size={25} className='mr-4' /> Orders
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <MdFavorite size={25} className='mr-4' /> Favorites
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <FaWallet size={25} className='mr-4' /> Wallet
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <MdHelp size={25} className='mr-4' /> Help
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <AiFillTag size={25} className='mr-4' /> Promotions
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <BsFillSaveFill size={25} className='mr-4' /> Best One
                    </li>

                    <li className='text-lg py-2 flex'> 
                        <FaUserFriends size={25} className='mr-4' /> Invite Friends
                    </li>
                </ul>
            </nav>

        </div>

    </div>
  )
}

export default Navbar