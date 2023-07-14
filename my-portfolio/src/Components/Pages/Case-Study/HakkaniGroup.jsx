import React from 'react';
import Case from '../../LargeComponents/Case';
import hakkaniData from '../../Data/hakkaniData';

const HakkaniGroup = () => {
  return (
    <div>
      <Case 
        bannerimage = {hakkaniData.bannerimage}
        logoimg = {hakkaniData.logoimg}
        project={hakkaniData.project}
        summary={hakkaniData.summary}
        responsibilities={hakkaniData.responsibilities}
        bgheader={hakkaniData.bgheader}
        bgdetails={hakkaniData.bgdetails}
        image={hakkaniData.image}
        section={hakkaniData.section} 
        />
    </div>
  )
}

export default HakkaniGroup;
