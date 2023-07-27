import React from 'react';
import Case from '../../LargeComponents/Case';
import caseData from '../../Data/Case-Study-Data/caseData';

const HakkaniGroup = () => {
  return (
    <div>
      <Case 
        key = {caseData[1].id}
        bannerimage = {caseData[1].bannerimage}
        logoimg = {caseData[1].logoimg}
        project={caseData[1].project}
        summary={caseData[1].summary}
        responsibilities={caseData[1].responsibilities}
        bgheader={caseData[1].bgheader}
        bgdetails={caseData[1].bgdetails}
        image={caseData[1].image}
        section={caseData[1].section} 
        />
    </div>
  )
}

export default HakkaniGroup;
