import React from 'react';
import Case from '../LargeComponents/Case';
import caseData from '../Data/Case-Study-Data/casesections';

const CaseStudy = () => {
  return (
    <div>
      <Case 
        bannerimage = {caseData.bannerimage}
        logoimg = {caseData.logoimg}
        project={caseData.project}
        summary={caseData.summary}
        responsibilities={caseData.responsibilities}
        bgheader={caseData.bgheader}
        bgdetails={caseData.bgdetails}
        image={caseData.image}
        section={caseData.section} 
        />
    </div>
  )
}

export default CaseStudy;
