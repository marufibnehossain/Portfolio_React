import React from 'react';

const CaseBg = (props) => {
  return (
    <div className=''>
      <div className='lg:w-[1000px] container mx-auto md:px-0 px-5 lg:py-[170px] sm:py-28 py-16 grid lg:grid-cols-2 gap-5 items-center'>
        <div className='text-left'>
            <h2 className='font-teko font-medium md:text-4xl text-2xl md:leading-10 text-[#333333] uppercase w-8/12'>{props.bgheader}</h2>
            <p className='font-nunito font-normal lg:text-lg text- text-[#333333] mt-6'>{props.bgdetails}</p>
        </div>
        <div className='mxs:block hidden border border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'><img className='lg:w-11/12 md:w-4/5 w-auto mx-auto my-5' src={props.image} alt={props.alt} /></div>
      </div>
    </div>
  )
}

export default CaseBg;
