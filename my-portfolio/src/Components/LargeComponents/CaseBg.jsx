import React from 'react';

const CaseBg = (props) => {
  return (
    <div className=''>
      <div className='lg:w-[1000px] container md:h-[850px] mxs:h-[900px] h-[600px] mx-auto md:px-0 px-5 grid lg:grid-cols-2 items-center py-16'>
        <div className='text-left'>
            <h2 className='font-teko font-medium md:text-4xl text-2xl md:leading-10 text-[#333333] uppercase w-2/3'>{props.bgheader}</h2>
            <p className='font-nunito font-normal lg:text-lg text- text-[#333333] mt-6'>{props.bgdetails}</p>
        </div>
        <div className='mxs:block hidden'><img className='lg:w-auto md:w-4/5 w-auto mx-auto my-5' src={props.image} alt={props.alt} /></div>
      </div>
    </div>
  )
}

export default CaseBg;
