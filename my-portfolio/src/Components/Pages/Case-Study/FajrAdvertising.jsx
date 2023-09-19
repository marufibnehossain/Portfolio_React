import React from 'react';
import Case from '../../LargeComponents/Case';
import caseData from '../../Data/Case-Study-Data/caseData';

const FajrAdvertising = () => {
  return (
    <div>
      <Case 
        key={caseData[4].id}
        bannerimage = {caseData[4].bannerimage}
        logoimg = {caseData[4].logoimg}
        project={caseData[4].project}
        summary={caseData[4].summary}
        responsibilities={caseData[4].responsibilities}
        bgheader={caseData[4].bgheader}
        bgdetails={caseData[4].bgdetails}
        image={caseData[4].image}
        section={caseData[4].section} 
        />
    </div>
  )
}

export default FajrAdvertising;
