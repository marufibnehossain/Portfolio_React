import React from 'react';
import { Link } from 'react-router-dom';

function clickBtn(props){
    return <Link key={props.id} to={props.btnlink} target={'_blank'} className='font-nunito text-sm font-bold leading-8 text-[#020101] capitalize' style={props.canClick ? { pointerEvents: "none" } : null}>{props.btnname}</Link>
}

const SideNav = (props) => {
  return (
    <div className='text-left'>
      <p className='font-teko text-base tracking-widest font-medium leading-5 mb-4 text-[#8d8a8a] uppercase'>{props.sidehead}</p>
      <div className='flex flex-col'>{props.sidebtn.map(clickBtn)}</div>
    </div>
  )
}

export default SideNav;
