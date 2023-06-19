import React from 'react';

const Brands = () => {
  return (
    <div className='lg:w-[1000px] container mx-auto'>
      <div className='w-full flex flex-col items-center'>
        <img className='mt-12' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg" alt="" />
        <img className='pt-5' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a51b07f22c423841fab_vertical-line.svg" alt="" />
      </div>

      <div>
        <div className='font-nunito text-[#cca354] text-shadow-[0px_0px_15px_rgba(204,163,84,0.5)] text-sm mt-20'>A few brands I've worked with</div>
        <img className='mx-auto my-11' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5f49512742ae0d3fa60de890_kyson-logos-1.png" alt="" />
      </div>

      <div className='w-full flex flex-col items-center'>
        <img className='mt-12' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg" alt="" />
        <img className='pt-5' src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a51b07f22c423841fab_vertical-line.svg" alt="" />
      </div>
    </div>
  )
}

export default Brands;
