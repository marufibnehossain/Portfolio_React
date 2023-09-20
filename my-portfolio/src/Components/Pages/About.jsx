import React from 'react';
import AboutDetails from '../LargeComponents/AboutDetails';
import Skills from '../LargeComponents/Skills';
import Qualification from '../LargeComponents/Qualification';
import PageBanner from '../LargeComponents/PageBanner';
import codeVideo from '../../assets/videos/source_code_720p.mp4';

const About = () => {
  return (
    <div className='bg-[#f1f1f1]'>
      <PageBanner bannerVideo={codeVideo} />
      <AboutDetails />
      <Skills />
      <Qualification />
    </div>
  )
}

export default About;
