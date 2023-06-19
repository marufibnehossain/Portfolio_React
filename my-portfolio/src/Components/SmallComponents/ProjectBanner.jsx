import React from 'react';

const ProjectBanner = (props) => {
  return (
    <>
      <div className='xl:w-[1280px] w-full mx-auto lg:mt-80 md:mt-60 mt-48'>
        <img className='w-full hidden md:block lg:px-0 md:px-10 px-10' src={props.img} alt={props.alt} />
        <img className='w-full md:hidden block lg:px-0 md:px-10 px-10' src={props.imgmd} alt={props.alt} />
        <div className='w-full px-10 md:pt-12 pt-5 font-nunito text-[#9a9a9a] md:text-xl mxs:text-base text-sm'><p className='lg:w-7/12 md:w-9/12 w-full mx-auto'>{props.text}</p></div>
      </div>
    </>
  )
}

export default ProjectBanner;
