import React from 'react';

const CaseBanner = (props) => {
  return (
    <div style={{backgroundImage:`url(${props.bannerimage})`}} className='w-full bg-cover bg-top mx-auto md:px-0 px-5 lg:h-[764px] sm:h-[800px] h-[750px] flex items-center relative'>
        <div className='lg:w-[1000px] container mx-auto grid md:grid-cols-3 gap-0 mt-28'>
            <div className='text-left md:col-span-3 md:my-0 my-5'>
                <h6 className='font-teko text-base font-normal text-[#CCA354] tracking-widest uppercase'>Brand</h6>
                <img className='md:mb-32 mb-10 w-[130px]' src={props.logoimg} alt={props.altlogo} />
            </div>
            <div className='text-left md:my-0 my-5'>
                <h6 className='font-teko text-base font-normal text-[#CCA354] tracking-widest uppercase'>Project</h6>
                <p className='font-teko md:text-[40px] text-3xl leading-10 uppercase text-white mr-10'>{props.project}</p>
            </div>
            <div className='text-left md:my-0 my-5'>
                <h6 className='font-teko text-base font-normal text-[#CCA354] tracking-widest uppercase'>Summary</h6>
                <p className='text-sm leading-6 text-white mr-10'>{props.summary}</p>
            </div><div className='text-left md:my-0 my-5'>
                <h6 className='font-teko text-base font-normal text-[#CCA354] tracking-widest uppercase'>responsibilities</h6>
                <p className='text-sm leading-6 text-white mr-10'>{props.responsibilities}</p>
            </div>
        </div>
    </div>
  )
}

export default CaseBanner;
