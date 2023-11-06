import React from 'react';
import { useInView } from 'react-intersection-observer';
import x from "../../assets/images/x.svg";
import verticalLine from "../../assets/images/vertical-line.svg";

const Brands = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <div className='lg:w-[1000px] container mx-auto md:px-0 px-5'>
      <div className='w-full flex flex-col items-center'>
        <img
          ref={ref}
          className={`mt-12 ${inView ? 'animate-[spin_1s_linear]' : ''? 'opacity-100':'opacity-0'}`}
          src={x}
          alt=""
        />
        <img
          ref={ref}
          className={`2xs:pt-5 pt-2.5 2xs:h-[120px] h-20 w-full ${inView ? 'animate-drop' : ''? 'opacity-100':'opacity-0'}`}
          src={verticalLine}
          alt=""
        />
      </div>

      <div>
        <div className='font-nunito text-[#cca354] text-shadow-[0px_0px_15px_rgba(204,163,84,0.5)] text-sm 2xs:mt-20 mt-14'>
          A few brands I've worked with
        </div>
        <img
          ref={ref}
          className='mx-auto my-11 md:w-9/12 w-full md:h-full h-full'
          src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5f49512742ae0d3fa60de890_kyson-logos-1.png"
          alt=""
        />
      </div>

      <div className='w-full flex flex-col items-center'>
        <img
          ref={ref}
          className={`2xs:mt-12 mt-8 ${inView ? 'animate-[spin_1s_linear]' : '' ? 'opacity-100':'opacity-0'}`}
          src={x}
          alt=""
        />
        <img
          ref={ref}
          className={`2xs:pt-5 pt-2.5 2xs:h-[120px] h-20 w-full ${inView ? 'animate-drop' : ''? 'opacity-100':'opacity-0'}`}
          src={verticalLine}
          alt=""
        />
      </div>
    </div>
  );
};

export default Brands;
