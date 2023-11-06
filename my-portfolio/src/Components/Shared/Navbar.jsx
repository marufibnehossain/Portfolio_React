import React from 'react';
import {  Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import logo from '../../assets/images/siteLogo1.png';

const Navbar = ({ setIsOpen }) => {
  return (
    <>
    <nav className='w-full bg-[#181818] fixed top-0 z-50'>
      <div className='lg:w-[1000px] container mx-auto mxs:py-4 py-5 flex justify-between'>
        <Link className='flex items-center' to="/">
            <img className='lg:w-16 sm:w-14 w-12 h-auto' src={logo} alt="" />
            <div className='sm:text-sm text-xs font-medium leading-tight font-nunito text-[#C89B1E] mt-3'>Maruf Ibne<br/>Hossain</div>
        </Link>
        
        <div className='uppercase font-teko text-[#cca354] text-xl my-auto leading-none md:block hidden'>
            <Link to="/" className='mx-5 transition-all duration-300 hover:text-shadow-[0px_0px_15px_rgba(204,163,84)]'>Home</Link>
            <Link to="/about" className='mx-5 transition-all duration-300 hover:text-shadow-[0px_0px_15px_rgba(204,163,84)]'>About</Link>
            <Link to="/website-projects" className='mx-5 transition-all duration-300 hover:text-shadow-[0px_0px_15px_rgba(204,163,84)]'>Website Projects</Link>
            <Link to='/research-projects' className='mx-5 transition-all duration-300 hover:text-shadow-[0px_0px_15px_rgba(204,163,84)]'>Research projects</Link>
            {/* <Link className='ml-5 transition-all duration-300 hover:text-shadow-[0px_0px_15px_rgba(204,163,84)]'>Contact</Link> */}
        </div>
        <div className="text-[#CCA354] my-auto md:hidden block">
            <RiMenu3Fill className="lg:text-3xl 4xs:text-2xl" type="button"  onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
