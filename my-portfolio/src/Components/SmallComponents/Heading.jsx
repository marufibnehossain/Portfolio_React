import React from 'react';

const Heading = (props) => {
  return (
    <div className={`md:my-16 my-12 ${props.class}`}>
        <h1 className={`${props.HeadColor} text-4xl font-semibold font-nunito md:my-5 my-2 capitalize`}>{props.heading}</h1>
        <div className='font-nunito text-[#cca354] text-shadow-[0px_0px_5px_rgba(204,163,84,0.7)] text-sm'>{props.sub}</div>
    </div>
  )
}

export default Heading;
