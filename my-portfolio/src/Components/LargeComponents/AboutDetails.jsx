import React from 'react';
// import { HiOutlineDocumentText } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import Heading from '../SmallComponents/Heading';
import profile2 from '../../assets/images/profile/profile12.jpg'
import SideNav from '../SmallComponents/SideNav';
import { digital, clients } from '../Data/sideData';

const AboutDetails = () => {
  return (
    <section className='lg:w-[1000px] mxs:container w-11/12 mx-auto lg:px-0 px-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col'>
      <Heading
        HeadColor= "text-[#000000]"
        heading= "about me"
        sub= "My Introduction"
      />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
        <div className='w-full lg:h-[350px] md:h-[400px] h-auto overflow-hidden max-md:mx-auto border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
            <img className='h-full w-full overflow-hidden object-cover' src={profile2} alt="" />
        </div>
        <div className='md:text-left gap-6'>
          <p className='md:text-base 2xs:text-base text-sm font-nunito text-[#000000] font-medium'>Hey there! 👋 I'm Maruf, a passionate computer science engineering graduate with a knack for crafting captivating web experiences. If there's one thing you should know about me, it's my unwavering enthusiasm for web development. <br/><br/>
          I thrive on turning ideas into dynamic and responsive web applications. My toolbox includes React.js, which I wield with finesse to breathe life into digital creations. But that's not all; I'm also your go-to WordPress whiz. Whether it's customizing the perfect theme, optimizing user journeys with Elementor, or setting up e-commerce magic with WooCommerce, I've got you covered. <bd/><br/><br/>
          What sets me apart is my meticulous attention to detail. I'm not just about code; I'm about crafting digital spaces that leave a lasting impression. I believe that design and user experience go hand in hand, and I'm here to make sure your projects shine. <br/><br/>
          But it's not just about tech skills. Collaboration is in my DNA. I thrive in team settings, but I'm equally comfortable going solo. I bring excellent communication skills to the table, ensuring that your vision is not only understood but brought to life seamlessly. <br/><br/>
          So, whether you're dreaming of an innovative web solution or a stunning WordPress site, I'm here to turn those dreams into reality. Let's embark on a web development journey that's as enjoyable as it is successful. <br/><br/>
          Ready to get started? Let's chat!</p>
        </div>
        <div className='flex flex-col gap-12'>
          <SideNav sidehead = 'Digital capabilities' sidebtn= {digital} />
          <SideNav sidehead = 'client & collaboration' sidebtn= {clients} />
        </div>
      </div>
    </section>
  )
}

export default AboutDetails;
