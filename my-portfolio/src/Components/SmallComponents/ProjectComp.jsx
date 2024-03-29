import React from 'react';
import { Link } from 'react-router-dom';

const ProjectComp = (props) => {
  const customStyle = {
    backgroundColor: ""
  }
  if(props.category==="WordPress"){
    customStyle.backgroundColor = "#21759B";
  }else if(props.category==="MERN"){
    customStyle.backgroundColor = "#5ED3F3";
  }else if(props.category==="Machine Learning"){
    customStyle.backgroundColor = "#6CD09E";
  }else if(props.category==="Deep Learning"){
    customStyle.backgroundColor = "#49B8DE";
  }else if(props.category==="Artificial Intelligence"){
    customStyle.backgroundColor = "#F7C069";
  }else{
    customStyle.backgroundColor = "#E96228";
  }
  return (
      <div style={{backgroundImage:`url(${props.image})`}} className='w-full h-[650px] bg-cover bg-center mxs:my-4 my-3 border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.5)]'>
        <div className='w-28 py-1.5 ml-auto md:mr-16 rounded-b-lg text-xs font-extrabold text-white' style={customStyle}>{props.category}</div>
        <div className='text-white md:w-[400px] mxs:w-[380px] 3xs:w-[270px] w-full lg:ml-[75px] mxs:ml-[43px] 3xs:mx-[22px] 3xs:px-0 px-4 block relative mxs:top-[45px] top-[35px] text-left font-teko'>
          <div className='w-2/5'><img className='mxs:mb-20 mb-16 3xs:h-[80px] h-[70px] w-full object-contain' src={props.logoimg} alt={props.altlogo} /></div>
          <div style={{color:`${props.textclr}`}} className='text-[#CCA354] uppercase tracking-[2px]'>{props.role}</div>
          <div style={{color:`${props.textclr}`}} className='uppercase mxs:w-[400px] 3xs:w-[250px] w-full my-6 mxs:text-[50px] 2xs:text-[44px] text-[35px] leading-[44px] flex'>{props.project}</div>
          <div style={{color:`${props.textclr}`}} className='md:w-[400px] mxs:w-[340px] 3xs:w-[250px] w-full text-sm font-arial'>{props.intro}</div>
          <Link style={{display:`${props.visiblewht}`}} to={props.caselink} className='uppercase relative case-btn-b'>{props.buttonw}</Link>
          <Link style={{display:`${props.visibleblk}`}} to={props.sitelink} target={'_blank'} className='uppercase relative case-btn-blk'>{props.buttonb}</Link>
        </div>      
      </div>
  )
}

export default ProjectComp;
