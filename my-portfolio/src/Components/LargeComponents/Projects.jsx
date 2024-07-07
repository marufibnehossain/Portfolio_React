import React from 'react';
import Heading from '../SmallComponents/Heading';
import ProjectComp from '../SmallComponents/ProjectComp';
import { projectsData } from '../Data/projects';


function portfolio(works) {
  return <ProjectComp 
            key={works.id} 
            image={works.image} 
            logoimg={works.logoimg} 
            altlogo={works.altlogo}
            role={works.role} 
            project={works.project} 
            intro={works.intro} 
            buttonw={works.buttonw}
            buttonb={works.buttonb} 
            textclr={works.textclr}
            visiblewht={works.visiblewht} 
            visibleblk={works.visibleblk} 
            caselink={works.caselink}
            sitelink={works.sitelink}
            category={works.category}
            featured={works.featured}
          />
}

const Projects = () => {
  return (
    <section className='mxs:px-7 px-4 py-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col font-nunito'>
        <Heading HeadColor= "text-[#D4D4D4]" heading="Projects" sub="Most recent works" />
        {projectsData.toReversed().map(portfolio)}
    </section>
  )
}

export default Projects;
