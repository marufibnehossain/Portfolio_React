import React, { useState } from 'react';
import Heading from '../SmallComponents/Heading';
import { SlGraduation } from 'react-icons/sl';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import QualityLeft from '../SmallComponents/QualityLeft';
import QualityRight from '../SmallComponents/QualityRight';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className='lg:w-[1000px] container mx-auto lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col font-nunito'>
        <Heading heading= "Qualification" sub="My personal journey" />
        <div>
            <div className='flex justify-center'>
                <div className={toggleState === 1 ? 'md:text-lg flex items-center gap-2 mx-4 cursor-pointer hover:text-gray-400 text-gray-500' : 'text-[#d4d4d4] md:text-lg flex items-center gap-2 mx-4 hover:text-gray-400 cursor-pointer'} onClick={() => toggleTab(1)}><SlGraduation className='text-xl' />Education</div>
                <div className={toggleState === 2 ? 'md:text-lg flex items-center gap-2 mx-4 cursor-pointer hover:text-gray-400 text-gray-500' : 'text-[#d4d4d4] md:text-lg flex items-center gap-2 mx-4 hover:text-gray-400 cursor-pointer'} onClick={() => toggleTab(2)}><BiBriefcaseAlt2 className='text-xl' />Experience</div>
            </div>
            <div className={toggleState === 2 ? 'lg:w-[70%] md:w-[90%] w-11/12 mx-auto my-5 active:block hidden' : 'lg:w-[70%] md:w-[90%] w-11/12 mx-auto my-5'}>
              <QualityLeft department="Computer Science & Engineering" institute="Port City International University - Chattogram" duration="2018 - 2022" />
              <QualityRight department="Computer Science & Engineering" institute="Port City International University - Chattogram" duration="2018 - 2022" />
              <QualityLeft department="Computer Science & Engineering" institute="Port City International University - Chattogram" duration="2018 - 2022" />
              <QualityRight department="Computer Science & Engineering" institute="Port City International University - Chattogram" duration="2018 - 2022" />
            </div>
            <div className={toggleState === 1 ? 'lg:w-[70%] md:w-[90%] w-11/12 mx-auto my-5 active:block hidden' : 'lg:w-[70%] md:w-[90%] w-11/12 mx-auto my-5'}>
              <QualityLeft department="Front-end web developer" institute="Compunder - Chattogram" duration="2022 - Present" />
              <QualityRight department="Front-end web developer" institute="Compunder - Chattogram" duration="2022 - Present" />
              <QualityLeft department="Front-end web developer" institute="Compunder - Chattogram" duration="2022 - Present" />
              <QualityRight department="Front-end web developer" institute="Compunder - Chattogram" duration="2022 - Present" />
            </div>
        </div>
    </section>
  )
}

export default Qualification;
