import React from 'react';
import CaseBanner from './CaseBanner';
import CaseBg from './CaseBg';
import CaseSections from './CaseSections';
// import caseData from '../Data/casesections';

function casesections(sections){
    return  <CaseSections 
              key={sections.id}
              image={sections.image}
              topic={sections.topic}
              header={sections.header}
              details={sections.details}
            />
}

const Case = (props) => {
  return (
    <div className='bg-white'>
      <CaseBanner bannerimage = {props.bannerimage}
        logoimg = {props.logoimg}
        project={props.project}
        summary={props.summary}
        responsibilities={props.responsibilities}
      />
      <CaseBg 
        bgheader={props.bgheader}
        bgdetails={props.bgdetails}
        image={props.image}
      />

      {props.section.map(casesections)}
    </div>
  )
}

export default Case;
