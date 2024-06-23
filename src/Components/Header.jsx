import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-center gap-2' >
      <img src="./src/assets/logo.svg" alt="logo"  />
      <button className='h-14 bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring </button>
      
      </div>
      <ul className='hidden lg:flex justify-between item-center font-lato gap-6 text-gray-400 py-4 '>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
        <li><a href="#">Why Hoster</a></li>

      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a href="#">Sign In </a>
        <button className='rounded-md px-4 py-3 bg-blue-400 text-white hover:bg-blue-600'>Join Waitlist </button>
      </div>
      <div className='py-5 lg:hidden'>
      <FaBars />
     

      </div>
    </div>
  )
}

export default Header