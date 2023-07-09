import React from 'react';
import Heading from '../SmallComponents/Heading';
import SkillCard from '../SmallComponents/SkillCard';

const Skills = () => {
  return (
    <section className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col'>
        <Heading heading= "skills" sub="My technical level" />
        <SkillCard />
    </section>
  )
}

export default Skills;
