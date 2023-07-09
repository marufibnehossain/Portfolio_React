import React from 'react';
import CaseBanner from '../LargeComponents/CaseBanner';
import CaseBg from '../LargeComponents/CaseBg';
import CaseSections from '../LargeComponents/CaseSections';
import section from '../Data/casesections';

function casesections(sections){
    return  <CaseSections 
              key={sections.id}
              image={sections.image}
              topic={sections.topic}
              header={sections.header}
              details={sections.details}
            />
}

const Case = () => {
  return (
    <div className='bg-white'>
      <CaseBanner bannerimage = "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5baeffa3c8d8514a64c42c81_cover-cardiff.jpg"
        logoimg = "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5ba80546f49b775f09f0dfca_cardiff-logo.png"
        project="dESIGNING GRAPHICS FOR A SNOWBOARD"
        summary="I designed graphics for a backcountry snowboard brand. Childhood goal complete."
        responsibilities="Graphic Design"
      />
      <CaseBg 
        bgheader="WHEN AN ARCHITECT GOES SNOWBOARDING" 
        bgdetails="Sam Bawden reached out to me one day with a crazy idea and asked me for some help. As an architect and craftsman, he was disappointed by the current options available for backcountry snowboarding. He knew that there had to be a better way and he set out to create just that. He envisioned snowboards that are lightweight, high performance, and designed for climbing just as much as they are for gliding back down.

        Sam reached out to me because he stumbled across a personal project of mine where and was inspired by the artwork. I had created about 25 animal drawings using flowing lines and shapes and he felt like I’d be a good fit to help create graphics on his boards."
        image="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5baf001d3a685e50dfd6bb79_sam-bawden-cardiff.jpg"
      />

      {section.map(casesections)}
    </div>
  )
}

export default Case;
