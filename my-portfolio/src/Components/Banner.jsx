import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='lg:w-[1000px] container mx-auto lg:h-screen sm:h-[900px] h-screen flex items-center relative'>
      <div className='lg:w-9/12 md:w-10/12 text-white text-left z-20 absolute mt-24 xs:mx-0 mx-3'>
        <h1 className='xs:text-[40px] text-[30px] tracking-wider font-archivo font-extrabold'>Kyson is a designer and art director who loves to craft a good story.</h1>
        <img className='pt-8' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg" alt="" />
        <p className='text-[#868686] font-nunito pt-8 text-lg xs:w-3/5'>I do digital design, brand design, and art direction. Currently, I'm an Associate Creative Director at <br /><Link to={'https://www.techbucketbd.com/'} target="_blank" className='text-[#b89107]'>Tech Bucket</Link>.</p>
      </div>
      <div className='lg:w-[520px] lg:h-[750px] md:w-[450px] sm:w-[500px] xs:w-[520px] xs:h-[777px] h-full -z-10 absolute lg:-right-10 right-0 bottom-0 overflow-hidden'>
        <img className='object-cover object-center h-full w-full' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/638c1c3665a7e49659761af2_kysondana-designer-photographer-p-800.jpg" alt="" />
      </div>
    </div>
  )
}

export default Banner;
