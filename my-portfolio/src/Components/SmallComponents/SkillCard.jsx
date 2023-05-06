import React from 'react';
import SkillContent from './SkillContent';
import frontend from './Data/frontend';
import backend from './Data/backend';

function card(content) {
  return <SkillContent key={content.id} skill={content.skill} level={content.level} />
}

const SkillCard = () => {
  return (
    <div className='grid xs:grid-cols-2 grid-cols-1 gap-12 md:mx-14 mx-4'>
      <div className='bg-inherit lg:px-12 px-6 lg:py-10 py-8 rounded-2xl border-2 border-[#d2d2d2]'>
        <h1 className='capitalize font-bold font-nunito text-[#d2d2d2] md:text-base text-sm mb-5'>frontend developer</h1>
        <div className='grid grid-cols-2'>
            {frontend.map(card)}
        </div>
      </div>
      <div className='bg-inherit lg:px-12 px-6 lg:py-10 py-8 rounded-2xl border-2 border-[#d2d2d2]'>
        <h1 className='capitalize font-bold font-nunito text-[#d2d2d2] md:text-base text-sm mb-5'>Backend developer</h1>
        <div className='grid grid-cols-2'>
            {backend.map(card)}
        </div>
      </div>
    </div>
  )
}

export default SkillCard;
