import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub,FaLinkedin,FaResearchgate,FaFacebook } from 'react-icons/fa';
import profile from '../../assets/images/profile/profile10.jpeg'

const Banner = () => {
  return (
    <div className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:h-screen sm:h-[900px] h-screen flex items-center relative'>
      <div className='lg:w-9/12 md:w-10/12 text-white text-left z-20 absolute mt-24 xs:mx-0 mx-3'>
        <h1 className='xs:text-[40px] text-[30px] tracking-wider font-archivo font-extrabold'>Kyson is a designer and art director who loves to craft a good story.</h1>
        <img className='pt-8' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg" alt="" />
        <p className='sm:text-[#868686] text-white md:font-normal font-semibold font-nunito pt-8 text-lg xs:w-3/5'>I do digital design, brand design, and art direction. Currently, I'm an Associate Creative Director at <br /><Link to={'https://www.techbucketbd.com/'} target="_blank" className='text-[#cca354] font-bold'>Tech Bucket</Link>.</p>
        <div className='text-[#B5B5B5] relative text-[28px] flex gap-5 mt-6'>
          <FaGithub className='hover:text-[#cca354] transition-all duration-300' />
          <FaLinkedin className='hover:text-[#cca354] transition-all duration-300' />
          <FaResearchgate className='hover:text-[#cca354] transition-all duration-300' />
          <FaFacebook className='hover:text-[#cca354] transition-all duration-300' />
        </div>
      </div>
      <div className='lg:w-[520px] xl:h-[750px] lg:h-[720px] md:w-[450px] sm:w-[500px] xs:w-[520px] xs:h-[777px] h-full -z-10 absolute lg:bottom-4 lg:-right-10 right-0 bottom-0 overflow-hidden border border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
        <img className='object-cover object-center h-full w-full' src={profile} alt="profile-img" />
      </div>
    </div>
  )
}

export default Banner;
