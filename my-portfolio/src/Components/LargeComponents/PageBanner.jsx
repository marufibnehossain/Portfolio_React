import React from 'react';
import codeVideo from '../../assets/videos/source_code_720p.mp4';
import { useInView } from 'react-intersection-observer';


const PageBanner = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
  });
  return (
    <div className='w-full mx-auto md:px-0 lg:h-[664px] sm:h-[700px] h-[650px] flex items-center relative'>
        <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover'>
            <source src={codeVideo} type="video/mp4" />
        </video>
        <div className=' text-white w-full bg-[rgba(0,0,0,0.5)] mx-auto md:px-0 px-5 lg:h-[664px] sm:h-[700px] h-[650px] flex items-center justify-center absolute z-20'>
            <h2 className='md:text-4xl text-2xl md:leading-[56px] font-archivo mt-20'>Maruf is a Web Developer<br/>who loves to create dynamic websites.</h2>
        </div>
        <div className='w-full flex flex-col items-center -bottom-16 absolute z-30'>
          <img
            ref={ref}
            className={`mt-12 ${inView ? 'animate-[spin_1s_linear]' : ''? 'opacity-100':'opacity-0'}`}
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg"
            alt=""
          />
          <img
            ref={ref}
            className={`pt-5 ${inView ? 'animate-drop' : ''? 'opacity-100':'opacity-0'}`}
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b9ee3d1fb9e09136536d75b_line-grey.svg"
            alt=""
          />
            {/* <img className='mt-12' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg" alt="" />
            <img className='pt-5' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b9ee3d1fb9e09136536d75b_line-grey.svg" alt="" /> */}
        </div>
    </div>
  )
}

export default PageBanner;
