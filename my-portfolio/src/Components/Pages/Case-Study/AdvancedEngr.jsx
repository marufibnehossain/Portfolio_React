import React from 'react';
import Case from '../../LargeComponents/Case';
// import aeData from '../../Data/advancedEngr';
import caseData from '../../Data/Case-Study-Data/caseData';

const AdvancedEngr = () => {
  return (
    <div>
      <Case 
        key={caseData[0].id}
        bannerimage = {caseData[0].bannerimage}
        logoimg = {caseData[0].logoimg}
        project={caseData[0].project}
        summary={caseData[0].summary}
        responsibilities={caseData[0].responsibilities}
        bgheader={caseData[0].bgheader}
        bgdetails={caseData[0].bgdetails}
        image={caseData[0].image}
        section={caseData[0].section} 
        />
    </div>
  )
}

export default AdvancedEngr;
