import React from 'react';
import AboutDetails from '../LargeComponents/AboutDetails';
import Skills from '../LargeComponents/Skills';
// import Qualification from '../LargeComponents/Qualification';
import PageBanner from '../LargeComponents/PageBanner';
import codeVideo from '../../assets/videos/source_code_720p.mp4';
import ContactSec from '../LargeComponents/ContactSec';
import Education from '../LargeComponents/Education';
import Experience from '../LargeComponents/Experience';

const About = () => {
  return (
    <div className='bg-[#f1f1f1] '>
      <PageBanner bannerVideo={codeVideo} />
      <AboutDetails />
      <div className='lg:w-[1000px] mxs:container w-11/12 mt-20 mx-auto border-[1px] border-b-[#d8d8d8]'></div>
      <Skills />
      <div className='lg:w-[1000px] mxs:container w-11/12 mt-20 mx-auto border-[1px] border-b-[#d8d8d8]'></div>
      {/* <Qualification /> */}
      <Experience />
      <div className='lg:w-[1000px] mxs:container w-11/12 mt-20 mx-auto border-[1px] border-b-[#d8d8d8]'></div>
      <Education />
      <div className='lg:w-[1000px] mxs:container w-11/12 mt-20 mx-auto border-[1px] border-b-[#d8d8d8]'></div>
      <ContactSec />
    </div>
  )
}

export default About;
