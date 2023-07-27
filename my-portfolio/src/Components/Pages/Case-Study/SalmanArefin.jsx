import React from 'react';
import Case from '../../LargeComponents/Case';
import caseData from '../../Data/Case-Study-Data/caseData';

const SalmanArefin = () => {
  return (
    <div>
      <Case 
        key={caseData[3].id}
        bannerimage = {caseData[3].bannerimage}
        logoimg = {caseData[3].logoimg}
        project={caseData[3].project}
        summary={caseData[3].summary}
        responsibilities={caseData[3].responsibilities}
        bgheader={caseData[3].bgheader}
        bgdetails={caseData[3].bgdetails}
        image={caseData[3].image}
        section={caseData[3].section} 
        />
    </div>
  )
}

export default SalmanArefin;
