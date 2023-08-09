import React from 'react';
import Heading from '../SmallComponents/Heading';
import SkillCard from '../SmallComponents/SkillCard';
import skillData from '../Data/skillData';

function card(content) {
  return <SkillCard key={content.id} title={content.title} SkillNames={content.SkillNames} />
}

const Skills = () => {
  return (
    <section className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col'>
        <Heading heading= "skills" sub="My technical level" />
        <div className='grid xs:grid-cols-2 grid-cols-1 gap-12 md:mx-14 mx-4'>
          {skillData.map(card)}
        </div>
    </section>
  )
}

export default Skills;
