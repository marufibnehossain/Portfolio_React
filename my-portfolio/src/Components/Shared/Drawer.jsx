import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className={"fixed overflow-hidden md:hidden block z-50 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full")}>
      
      <section className={"sm:max-w-xs w-full right-0 absolute bg-[#181818] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")}>
      
        <div className="w-full p-5 px-4 flex justify-end"><RxCross2 className="text-[#CCA354] text-4xl xl:mx-9 md:mx-8 mx-5" onClick={() => {setIsOpen(false);}} /></div>

        <div className='uppercase h-[75%] flex items-center justify-center text-[#CCA354] font-teko font-normal text-4xl leading-none'>
          <ul>
            <li className='my-3 transition-all duration-500'><Link to="/">Home</Link></li>
            <li className='my-3 transition-all duration-500'><Link to="/About">About</Link></li>
            <li className='my-3 transition-all duration-500'><Link to="/website-projects">Website Projects</Link></li>
            <li className='my-3 transition-all duration-500'><Link>Portfolio</Link></li>
            <li className='my-3 transition-all duration-500'><Link>Contact</Link></li>
          </ul>
        </div>

      </section>
      <section className=" w-screen h-auto cursor-pointer " onClick={() => {setIsOpen(false);}}></section>
    </div>
  )
}

export default Drawer;
