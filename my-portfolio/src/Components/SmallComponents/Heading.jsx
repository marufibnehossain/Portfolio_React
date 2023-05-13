import React from 'react';

const Heading = (props) => {
  return (
    <div className='md:my-16 my-12'>
        <h3 className='text-4xl text-[#D4D4D4] font-semibold font-nunito md:my-5 my-2 capitalize'>{props.heading}</h3>
        <div className='font-nunito text-[#808080] text-sm'>{props.sub}</div>
    </div>
  )
}

export default Heading;
