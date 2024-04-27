import React from 'react'
import logo from '../assets/logo.svg'
import { AlignJustify } from 'lucide-react'
function NavBar() {
  return (
    <div className='w-full h-8 flex justify-between py-8 px-4 my-4   md:px-12 lg:px-20 items-center   '>
        <div className='flex gap-2'>
            <img src={logo} alt='...' className='w-8' />
            <h3 className='font-bold text-txt text-lg' >K-linker</h3>
        </div>
        <div className='gap-12 lg:gap-24 hidden md:flex  justify-between font-semibold text-base  '>
            <a href='#' className='hover:text-main transition cursor-pointer'>Home</a>
            <a href='#s3' className='hover:text-main transition cursor-pointer'>Portfolio</a>
            <a href='#s2' className='hover:text-main transition cursor-pointer'>About us</a>
            <a href='#contact' className='font-medium text-white bg-main py-2 px-3 rounded-md text-base  transition cursor-pointer'>Contact us</a>
        </div>
        <div className='md:hidden block'>
        <AlignJustify />
        </div>
    </div>
  )
}

export default NavBar