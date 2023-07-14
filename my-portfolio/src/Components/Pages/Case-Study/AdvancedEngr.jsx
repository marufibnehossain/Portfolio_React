import React from 'react';
import Case from '../../LargeComponents/Case';
import aeData from '../../Data/advancedEngr';

const AdvancedEngr = () => {
  return (
    <div>
      <Case 
        bannerimage = {aeData.bannerimage}
        logoimg = {aeData.logoimg}
        project={aeData.project}
        summary={aeData.summary}
        responsibilities={aeData.responsibilities}
        bgheader={aeData.bgheader}
        bgdetails={aeData.bgdetails}
        image={aeData.image}
        section={aeData.section} 
        />
    </div>
  )
}

export default AdvancedEngr;
