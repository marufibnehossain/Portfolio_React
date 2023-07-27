import React from 'react';
import Case from '../../LargeComponents/Case';
import caseData from '../../Data/Case-Study-Data/caseData';

const SmileTissue = () => {
  return (
    <div>
      <Case 
        key = {caseData[2].id}
        bannerimage = {caseData[2].bannerimage}
        logoimg = {caseData[2].logoimg}
        project={caseData[2].project}
        summary={caseData[2].summary}
        responsibilities={caseData[2].responsibilities}
        bgheader={caseData[2].bgheader}
        bgdetails={caseData[2].bgdetails}
        image={caseData[2].image}
        section={caseData[2].section} 
        />
    </div>
  )
}

export default SmileTissue;
