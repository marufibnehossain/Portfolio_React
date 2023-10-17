import React from 'react';
import { FaRibbon, FaSuitcase } from 'react-icons/fa';
import { BiSupport  } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Heading from '../SmallComponents/Heading';
import profile2 from '../../assets/images/profile/profile12.jpg'

const Aboutme = () => {
  return (
    <section className='lg:w-[1000px] container mx-auto lg:px-0 px-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col'>
      <Heading
        HeadColor= "text-[#D4D4D4]"
        heading= "about me"
        sub= "My Introduction"
      />
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='md:w-5/6 sm:w-4/6 w-10/12 h-auto overflow-hidden rounded-3xl max-md:mx-auto border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
            <img className='h-full w-auto overflow-hidden object-cover' src={profile2} alt="" />
        </div>
        <div className='flex flex-col justify-between gap-6'>
            <div className='grid grid-cols-3 gap-3 text-[#d2d2d2] font-nunito'>
                <div className='border-2 border-[#cca354] rounded-xl flex flex-col 2xs:p-3 p-1.5 shadow-[0px_0px_15px_rgba(204,163,84,0.3)]'>
                    <FaRibbon className='md:text-2xl text-xl mx-auto mt-1 text-[#cca354]' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-[11px] 2xs:my-1 my-0.5'>Experience</h4>
                    <p className='text-xs font-light mb-1 text-[#cca354]'>1+ Years</p>
                </div>
                <div className='border-2 border-[#cca354] rounded-xl flex flex-col 2xs:p-3 p-1.5 shadow-[0px_0px_15px_rgba(204,163,84,0.3)]'>
                    <FaSuitcase className='md:text-2xl text-xl mx-auto mt-1 text-[#cca354]' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-[11px] 2xs:my-1 my-0.5'>Completed</h4>
                    <p className='text-xs font-light mb-1 text-[#cca354]'>10+ Projects</p>
                </div>
                <div className='border-2 border-[#cca354] rounded-xl flex flex-col 2xs:p-3 p-1.5 shadow-[0px_0px_15px_rgba(204,163,84,0.3)]'>
                    <BiSupport className='md:text-2xl text-xl mx-auto mt-1 text-[#cca354]' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-[11px] 2xs:my-1 my-0.5'>Support</h4>
                    <p className='text-xs font-light mb-1 text-[#cca354]'>Online 24/7</p>
                </div>
            </div>
            <div className='md:text-left font-nunito'>
                <p className='md:text-lg 2xs:text-base text-sm text-[#b8b8b8] font-semibold'>Hey there! 👋 I'm Maruf, a passionate computer science engineering graduate with a knack for crafting captivating web experiences. If there's one thing you should know about me, it's my unwavering enthusiasm for web development.<br/>I thrive on turning ideas into dynamic and responsive web applications. My toolbox includes React.js, which I wield with finesse to breathe life into digital creations. But that's not all; I'm also your go-to WordPress whiz.</p>
            </div>
            <div className='text-[#d2d2d2] sm:text-lg text-sm font-semibold max-md:flex max-md:justify-center'>
                <Link to={'https://drive.google.com/file/d/1rQRYd_myG1-z2dosCRQh_j0dGnoXJGMd/view'} target={'_blank'} className='md:h-14 2xs:h-12 h-12 md:w-48 2xs:w-44 w-36 border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.2)] hover:bg-[#cca354] hover:text-[#181818] transition-colors duration-300 rounded-xl flex items-center justify-center'>Download CV<HiOutlineDocumentText className='ml-2 text-2xl font-bold' /></Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme;
