import React from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';


const SkillContent = (props) => {
  return (
    <div className='grid grid-cols-5 font-nunito text-left my-1.5 text-[#d2d2d2]'>
      <div className='col-span-1 flex justify-center md:text-lg text-base'>
        <HiOutlineBadgeCheck className='font-base my-1 text-[#cca354]' />
      </div>
      <div className='col-span-4 text-black'>
          <h2 className='font-bold md:text-base text-sm mx-2'>{props.skill}</h2>
          <p className='font-semibold md:text-sm text-xs mx-2'>{props.level}</p>
      </div>
    </div>
  )
}

export default SkillContent;
