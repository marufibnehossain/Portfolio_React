import React from 'react';
import {  Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../../assets/images/16857057987171.png';

const Navbar = ({ setIsOpen }) => {
  return (
    <>
    <nav className='w-full bg-[#181818] fixed top-0 z-50'>
      <div className='lg:w-[1000px] container mx-auto mxs:py-4 py-5 flex justify-between'>
        <Link className='flex items-center'>
            <img className='lg:w-16 sm:w-14 w-12' src={logo} alt="" />
            <div className='sm:text-sm text-xs font-medium leading-tight font-nunito text-[#C89B1E] mt-3'>Maruf Ibne<br/>Hossain</div>
        </Link>
        
        <div className='uppercase font-teko font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E0AA3E] from-70% via-[#f5cc46] via-75% to-[#B88A44] to-90% text-xl my-auto leading-none md:block hidden'>
            <Link to="/" className='mx-4 transition-opacity duration-500 hover:text-[]'>Home</Link>
            <Link to="/About" className='mx-4 transition-opacity duration-500 hover:text-[]'>About</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:text-[]'>Skills</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:text-[]'>Portfolio</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:text-[]'>Contact</Link>
        </div>
        <div className="text-gray-200 my-auto md:hidden block">
            <RiMenu3Fill className="hover:text-white lg:text-3xl 4xs:text-2xl" type="button"  onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
