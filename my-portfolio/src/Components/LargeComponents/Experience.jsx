import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { experiences } from '../Data/EducationData';
import Heading from '../SmallComponents/Heading';
import ExperienceCard from '../SmallComponents/ExperienceCard';


const Experience = () => {
  return (
    <section className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:mt-0 lg:mb-10 md:mb-16 my-10 flex flex-col'>
      <Heading HeadColor="black" heading= "Experience" sub="My professional journey" />
      <ul className="timeline timeline-vertical md:block">
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
                <li>
                  {index !== 0 && (<hr className='bg-[#cca354]'/>)}
                  <div className="timeline-start timeline-box sm:px-4 px-1 sm:py-2 py-1"><ExperienceCard exp={experience} /></div>
                  <div className="timeline-middle p-1 bg-inherit text-sm text-[#cca354] drop-shadow-[0px_0px_5px_rgba(204,163,84,0.7)]">
                    <FaRegCircle />
                  </div>
                  {index !== experiences.length-1 && (<hr className='bg-[#cca354]' />)}
                </li>
              ) : (
                <li>
                  <hr className='bg-[#cca354]'/>
                  <div className="timeline-middle p-1 bg-inherit text-sm text-[#cca354] drop-shadow-[0px_0px_5px_rgba(204,163,84,0.7)]">
                    <FaRegCircle />
                  </div>
                  <div className="timeline-end timeline-box sm:px-4 px-1 sm:py-2 py-1"><ExperienceCard exp={experience} /></div>
                  {index !== experiences.length-1 && (<hr className='bg-[#cca354]' />)}
                </li>
              )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default Experience;