import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaGithub,FaLinkedin,FaResearchgate,FaFacebook } from 'react-icons/fa';
import profile from '../../assets/images/profile/profile10.webp';
import horizontalLine from '../../assets/images/horizontal-line.svg';

const Banner = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = profile; // Replace with the actual image path
    link.as = 'image';

    document.head.appendChild(link);

    // Clean up the link element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:h-screen sm:h-[900px] h-screen flex items-center relative'>
      <div className='lg:w-9/12 md:w-10/12 text-white text-left z-20 absolute mt-24 xs:mx-0 mx-3'>
        <h1 className='sm:text-[40px] 2xs:text-[24px] text-[20px] tracking-wider font-archivo font-extrabold'>Maruf Ibne Hossain is a Web Developer who loves to craft a good Website.</h1>
        <img className='pt-8 w-16 h-full' src={horizontalLine} alt="" />
        <p className='sm:text-[#868686] text-white md:font-normal font-semibold font-nunito pt-8 text-lg xs:w-3/5'>I do Web Development and Machine Learning Research. Currently, I'm a Web Developer at <br /><Link to={'#'} target="_blank" className='text-[#C89B1E] font-bold'>Sleek Solutions LTD</Link>.</p>
        <div className='md:text-[#B5B5B5] text-[#cca354] relative text-[28px] flex gap-5 mt-6'>
          <Link to={'https://github.com/marufibnehossain'} target={'_blank'} aria-label="Visit my GitHub profile"><FaGithub className='md:hover:text-[#cca354] transition-all duration-300' /></Link>
          <Link to={'https://www.linkedin.com/in/marufibnhossain/'} target={'_blank'} aria-label="Visit my Linkedin profile"><FaLinkedin className='md:hover:text-[#cca354] transition-all duration-300' /></Link>
          <Link to={'https://www.researchgate.net/profile/Maruf'} target={'_blank'} aria-label="Visit my Researchgate profile"><FaResearchgate className='md:hover:text-[#cca354] transition-all duration-300' /></Link>
          <Link to={'https://www.facebook.com/marufibnehossain'} target={'_blank'} aria-label="Visit my Facebook profile"><FaFacebook className='md:hover:text-[#cca354] transition-all duration-300' /></Link>
        </div>
      </div>
      <div className='lg:w-[520px] xl:h-[750px] lg:h-[720px] md:w-[450px] sm:w-[500px] xs:w-[520px] xs:h-[777px] h-full -z-10 absolute lg:bottom-4 lg:-right-10 right-0 bottom-0 overflow-hidden border border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
        <img className='object-cover object-center h-full w-full' src={profile} alt="profile-img" />
      </div>
    </div>
  )
}

export default Banner;
