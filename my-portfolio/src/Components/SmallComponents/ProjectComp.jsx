import React from 'react';
import { Link } from 'react-router-dom';

const ProjectComp = (props) => {
  return (
      <div style={{backgroundImage:`url(${props.image})`}} className='w-full h-[650px] bg-cover bg-center mxs:my-4 my-3 border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
        <div className='text-white md:w-[400px] mxs:w-[380px] 3xs:w-[270px] w-full lg:ml-[75px] mxs:ml-[43px] 3xs:mx-[22px] 3xs:px-0 px-4 block relative mxs:top-[60px] top-[40px] text-left font-teko'>
          <img className='mxs:mb-28 mb-20 3xs:w-[130px] w-2/3' src={props.logoimg} alt={props.altlogo} />
          <div style={{color:`${props.textclr}`}} className='text-[#CCA354] uppercase tracking-[2px]'>{props.role}</div>
          <div style={{color:`${props.textclr}`}} className='uppercase mxs:w-[400px] 3xs:w-[250px] w-full my-6 mxs:text-[50px] 3xs:text-[44px] text-[35px] leading-[44px] flex'>{props.project}</div>
          <div style={{color:`${props.textclr}`}} className='md:w-[400px] mxs:w-[340px] 3xs:w-[250px] w-full text-sm font-arial'>{props.intro}</div>
          <Link style={{display:`${props.visiblewht}`}} className='uppercase relative text-[#CCA354] font-medium border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.2)] mxs:mt-14 3xs:mt-12 mt-10 mxs:px-7 px-4 mxs:py-3 py-2 transition-colors duration-200 hover:bg-[#cca354] hover:text-[#181818]'>{props.button}</Link>
          <Link style={{display:`${props.visibleblk}`}} className='uppercase relative text-[#CCA354] border-b-2 bg-black border-black mxs:mt-14 3xs:mt-12 mt-10 mxs:px-7 px-4 mxs:py-3 py-2 transition-colors duration-300 hover:border-[#CCA354] hover:shadow-[0px_0px_15px_rgba(204,163,84,0.2)]'>{props.button}</Link>
        </div>      
      </div>
  )
}

export default ProjectComp;
