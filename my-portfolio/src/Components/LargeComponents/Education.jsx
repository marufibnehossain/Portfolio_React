import React, { useState } from 'react';
import { Flowbite, Timeline } from 'flowbite-react';
import { FaRegCircle } from "react-icons/fa";
import { courses, educations } from '../Data/EducationData';
import QualityCard from '../SmallComponents/QualityCard';
import Heading from '../SmallComponents/Heading';
import { SlGraduation } from 'react-icons/sl';
// import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsJournalBookmarkFill } from "react-icons/bs";


// Define your custom theme with type annotations
const customTheme = {
  timeline: {
    root: {
      direction: {
        horizontal: 'items-base sm:flex',
        vertical: 'relative border-l border-[#cca354] dark:border-gray-700',
      },
    },
    item: {
      root: {
        horizontal: 'relative mb-6 sm:mb-0',
        vertical: 'mb-10 ml-6',
      },
      content: {
        root: {
          base: 'mt-3 sm:pr-8',
        },
        body: 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
        time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
        title: 'text-lg font-semibold text-gray-900 dark:text-white',
      },
      point: {
        horizontal: 'flex items-center',
        line: 'hidden h-0.5 w-full bg-gray-900 dark:bg-gray-700 sm:flex',
        marker: {
          base: {
            horizontal: 'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-900 dark:border-gray-900 dark:bg-gray-700',
            vertical: 'absolute -left-1.5 rounded-full border border-white bg-[#F1F1F1] dark:border-gray-900 dark:bg-gray-700',
          },
          icon: {
            base: 'h-3 w-3 text-[#cca354] drop-shadow-[0px_0px_5px_rgba(204,163,84,0.7)] dark:text-cyan-300',
            wrapper: 'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f1f1] dark:bg-cyan-900 dark:ring-gray-900',
          },
        },
        vertical: '',
      },
    },
  },
};

const Education = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section id='experience' className="lg:w-[1000px] container mx-auto md:px-0 3xs:px-5 px-3 lg:mt-0 lg:pb-10 md:pb-16 pb-10 my-10 text-left font-nunito">
      <Heading HeadColor="black" heading= "Qualification" sub="My personal journey" />

      <div className='flex justify-center font-bold'>
          <div className={toggleState === 1 ? 'md:text-lg flex items-center gap-2 mx-4 cursor-pointer hover:text-[#cca354] text-[#cca354]' : 'text-[#000000] md:text-lg flex items-center gap-2 mx-4 hover:text-[#cca354] cursor-pointer'} onClick={() => toggleTab(1)}><SlGraduation className='text-xl' />Education</div>
          <div className={toggleState === 2 ? 'md:text-lg flex items-center gap-2 mx-4 cursor-pointer hover:text-[#cca354] text-[#cca354]' : 'text-[#000000] md:text-lg flex items-center gap-2 mx-4 hover:text-[#cca354] cursor-pointer'} onClick={() => toggleTab(2)}><BsJournalBookmarkFill className='text-xl' />Courses</div>
      </div>

      <div className={toggleState === 1 ? 'lg:w-[70%] md:w-[90%] 3xs:w-11/12 w-full mx-auto my-5 active:block hidden' : 'lg:w-[70%] md:w-[90%] 3xs:w-11/12 w-full mx-auto my-5'}>
        <Flowbite theme={{ theme: customTheme }}>
          <Timeline className='md:w-[700px] w-[350px] mx-auto'>
            {educations.map((education, index) => (
            <Timeline.Item className='' key={index}>
              <Timeline.Point className='' icon={FaRegCircle} />
              {/* {index !== experiences.length - 1 && <Timeline.Point className="!bg-transparent" />} */}
              <Timeline.Content>
                <div className='timeline-box'><QualityCard quality={education} /></div>
              </Timeline.Content>
            </Timeline.Item>
            ))}
          </Timeline>
        </Flowbite>
      </div>

      <div className={toggleState === 2 ? 'lg:w-[70%] md:w-[90%] 3xs:w-11/12 w-full mx-auto my-5 active:block hidden' : 'lg:w-[70%] md:w-[90%] 3xs:w-11/12 w-full mx-auto my-5'}>
        <Flowbite theme={{ theme: customTheme }}>
          <Timeline className='md:w-[700px] sm:w-[350px] w-11/12 mx-auto'>
            {courses.map((course, index) => (
            <Timeline.Item className='' key={index}>
              <Timeline.Point className='' icon={FaRegCircle} />
              {/* {index !== experiences.length - 1 && <Timeline.Point className="!bg-transparent" />} */}
              <Timeline.Content>
                <div className='timeline-box'><QualityCard quality={course} /></div>
              </Timeline.Content>
            </Timeline.Item>
            ))}
          </Timeline>
        </Flowbite>
      </div>
    </section>
  )
}

export default Education;
