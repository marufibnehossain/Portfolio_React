import React from 'react';
import ProjectBanner from '../SmallComponents/ProjectBanner';
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

const WebProjects = () => {
  return (
    <>
      <ProjectBanner 
        img="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5e1610dac793814c75b843f6_digital-design.svg" 
        imgmd="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5e16172dc793819eecb87450_digital-design-mobile.svg" 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rerum ducimus obcaecati esse quis excepturi autem, eligendi sapiente porro? Itaque."
      />
      
      <section className='mxs:px-7 px-4 py-5 lg:mb-10 md:mb-16 flex flex-col font-nunito'>
        <Heading class='!my-8' heading="Projects" sub="Most recent works" />
        {project.map(portfolio)}
      </section>

    </>
  )
}

export default WebProjects;
