import React from 'react';

const CaseSections = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt} />
      <div className='lg:w-[1000px] container md:h-[600px] mxs:h-[500px] h-[570px] mx-auto md:px-0 px-5 flex items-center'>
        <div className="grid md:grid-cols-4">
          <div>
            <div className='flex items-center uppercase font-teko font-normal text-base leading-7 text-[#CCA354] h-10'><div className='bg-[#CCA354] md:mr-6 mr-3 md:w-16 w-6 md:h-1 h-[3px]'></div>{props.topic}</div>
          </div>
          <div className='text-left col-span-3'>
              <h2 className='font-teko font-medium md:text-4xl text-2xl md:leading-10 text-[#333333] uppercase w-2/3 '>{props.header}</h2>
              <p className='font-nunito font-normal lg:text-lg text- text-[#333333] mt-6'>{props.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseSections;
