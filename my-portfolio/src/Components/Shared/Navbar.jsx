import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';

const Navbar = ({ setIsOpen }) => {
  return (
    <nav className='w-full bg-[#181818] fixed top-0 z-50'>
      <div className='lg:w-[1000px] container mx-auto p-5 flex justify-between'>
        <Link>
            <div className='font-teko font-normal text-white text-left text-3xl uppercase'>MARUF HOSSAIN</div>
        </Link>
        
        <div className='uppercase font-teko font-normal text-white text-xl my-auto leading-none md:block hidden'>
            <Link className='mx-4 transition-opacity duration-500 hover:opacity-70'>Home</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:opacity-70'>About</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:opacity-70'>Skills</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:opacity-70'>Portfolio</Link>
            <Link className='mx-4 transition-opacity duration-500 hover:opacity-70'>Contact</Link>
        </div>
        <div className="text-gray-200 my-auto md:hidden block">
            <RiMenu3Fill className="hover:text-white lg:text-3xl 4xs:text-2xl" type="button"  onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
