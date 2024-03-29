import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='w-full p-5 bg-[#181818]'>
      <div className='w-[94%] mx-auto md:flex md:justify-between lg:my-20 md:my-16 my-10'>
        {/* left */}
        <div className='flex lg:gap-24 gap-5 md:flex-row flex-col '>
            <div className='md:text-left text-center'>
                <h2 className='md:text-5xl text-3xl font-semibold font-teko text-white my-5'>WORK</h2>
                <div className='flex flex-col gap-5 md:text-base text-sm capitalize'>
                    <Link to={"/website-projects"} className='text-white hover:text-[#CCA354]'>websites projects</Link>
                    <Link to={'/research-projects'} className='text-white hover:text-[#CCA354]'>research papers</Link>
                    <Link className='text-white hover:text-[#CCA354]'>mobile apps</Link>
                </div>
            </div>
            <div className='md:text-left text-center'>
                <h2 className='md:text-5xl text-3xl font-semibold font-teko text-white my-5'>ABOUT</h2>
                <div className='flex flex-col gap-5 md:text-base text-sm capitalize'>
                    <Link to={'/about'} className='text-white hover:text-[#CCA354]'>About Maruf</Link>
                    <Link to={'https://www.upwork.com/freelancers/~01f59964e74d618400'} target='_blank' className='text-white hover:text-[#CCA354]'>Upwork</Link>
                    <Link to={'https://www.linkedin.com/in/marufibnhossain/'} target='_blank' className='text-white hover:text-[#CCA354]'>LinkedIn</Link>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='md:w-[470px] md:mt-0 mt-8'>
            <h2 className='md:text-5xl text-3xl font-semibold font-teko text-white my-5'>LET<span className='text-[#CCA354]'>’</span>S CONNECT</h2>
            <div className='text-white md:text-base text-sm'>I’m creating a guide on how to design a portfolio site to land your dream job. Sign up to get it first.</div>
        </div>
      </div>
      <div className='w-[94%] mx-auto md:flex justify-between border-t-2 border-[rgba(204,163,84,0.7)]'>
        <div className='text-sm text-white md:text-left md:mt-8 mt-7'>©{new Date().getFullYear()} Maruf Ibne Hossain. All Rights Reserved.</div>
        <div className='text-[#cca354] flex text-lg md:mt-8 mt-4 justify-center'>
            <Link className='border-2 border-[#CCA354] hover:bg-[#CCA354] hover:text-[#181818] transition-all duration-300 p-2 rounded-full mx-1.5' target={'_blank'} aria-label="Visit my Instagram profile"><FaInstagram /></Link>
            <Link className='border-2 border-[#CCA354] hover:bg-[#CCA354] hover:text-[#181818] transition-all duration-300 p-2 rounded-full mx-1.5' target={'_blank'} aria-label="Visit my X profile"><RiTwitterXLine /></Link>
            <Link className='border-2 border-[#CCA354] hover:bg-[#CCA354] hover:text-[#181818] transition-all duration-300 p-2 rounded-full mx-1.5' target={'_blank'} aria-label="Visit my Youtube profile"><FaYoutube /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
