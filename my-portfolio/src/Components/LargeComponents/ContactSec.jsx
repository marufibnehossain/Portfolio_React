import React from 'react';
import Heading from '../SmallComponents/Heading';
import SideNav from '../SmallComponents/SideNav';
import { contact, experience } from '../Data/sideData';
import { Link } from 'react-router-dom';

const ContactSec = () => {
  return (
    <section className='lg:w-[1000px] mxs:container w-11/12 mx-auto lg:px-0 px-5 lg:mt-0 lg:mb-10 md:mb-16 my-10 flex flex-col'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
        <Heading
            HeadColor= "text-[#000000]"
            heading= "Contact"
        />
        <div className='md:text-left gap-6 md:my-16 my-12'>
            <SideNav sidehead = "Let's Work together" sidebtn= {contact} />
        </div>
        <div className='flex flex-col gap-8 md:my-16 my-12'>
          <SideNav sidehead = 'brand & collaboration' sidebtn= {experience} />
          <Link to={'https://drive.google.com/file/d/1rQRYd_myG1-z2dosCRQh_j0dGnoXJGMd/view'} className='font-nunito font-bold text-[#272727] underline italic text-left underline-offset-4'>Download Resume</Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSec;
