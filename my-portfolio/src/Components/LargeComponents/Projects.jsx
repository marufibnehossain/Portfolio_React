import React from 'react';
import Heading from '../SmallComponents/Heading';
import ProjectComp from '../SmallComponents/ProjectComp';
import project from '../Data/projects';


function portfolio(works) {
  return <ProjectComp 
            key={works.id} 
            image={works.image} 
            logoimg={works.logoimg} 
            altlogo={works.altlogo}
            role={works.role} 
            project={works.project} 
            intro={works.intro} 
            button={works.button} 
            textclr={works.textclr}
            visiblewht={works.visiblewht} 
            visibleblk={works.visibleblk} 
          />
}

const Projects = () => {
  return (
    <section className='mxs:px-7 px-4 py-5 lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col font-nunito'>
        <Heading heading="Projects" sub="Most recent works" />
        {project.map(portfolio)}
    </section>
  )
}

export default Projects;
