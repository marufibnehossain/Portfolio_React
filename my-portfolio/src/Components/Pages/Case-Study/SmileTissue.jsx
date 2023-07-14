import React from 'react';
import Case from '../../LargeComponents/Case';
import smileData from '../../Data/smiledata';

const SmileTissue = () => {
  return (
    <div>
      <Case 
        bannerimage = {smileData.bannerimage}
        logoimg = {smileData.logoimg}
        project={smileData.project}
        summary={smileData.summary}
        responsibilities={smileData.responsibilities}
        bgheader={smileData.bgheader}
        bgdetails={smileData.bgdetails}
        image={smileData.image}
        section={smileData.section} 
        />
    </div>
  )
}

export default SmileTissue;
