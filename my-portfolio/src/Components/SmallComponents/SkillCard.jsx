import React from 'react';
import SkillContent from './SkillContent';

function skills(content) {
  return <SkillContent key={content.id} skill={content.skill} level={content.level} />
}

const SkillCard = (props) => {
  return (
      <div className='bg-inherit lg:px-12 px-6 lg:py-10 py-8 rounded-2xl border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
        <h1 className='capitalize font-bold font-nunito text-[#000000] md:text-base text-sm mb-5'>{props.title}</h1>
        <div className='grid grid-cols-2'>
            {props.SkillNames.map(skills)}
        </div>
      </div>
  )
}

export default SkillCard;
