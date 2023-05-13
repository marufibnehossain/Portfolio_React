import React from 'react';

const QualityRight = (props) => {
  return (
    <div className='flex justify-end'>
      <div className='flex flex-row-reverse justify-between md:w-[50.8%] sm:w-[50.8%] xs:w-[50.95%] mxs:w-[51.05%] 2xs:w-[51.1%] 3xs:w-[51.5%] 4xs:w-[52%]'>
        <div className='text-left text-[#d4d4d4] xs:ml-0 ml-4'>
            <h5 className='md:text-base mxs:text-sm text-xs font-semibold leading-normal'>{props.department}</h5>
            <p className='md:text-sm mxs:text-xs text-[10px] leading-loose'>{props.institute}</p>
            <p className='md:text-sm mxs:text-xs text-[10px] leading-loose'>{props.duration}</p>
        </div>
        <div className=''>
            <span className='inline-block md:w-3 w-2.5 md:h-3 h-2.5 bg-[#d4d4d4] rounded-full'></span>
            <span className='block w-[1px] h-[100%] bg-[#d4d4d4] translate-x-[5px] md:translate-x-[6px] -translate-y-[7px]'></span>
        </div>
      </div>
    </div>
  )
}

export default QualityRight;
