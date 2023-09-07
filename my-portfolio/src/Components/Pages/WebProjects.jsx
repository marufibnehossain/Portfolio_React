import React, { useEffect, useState } from 'react';
import ProjectBanner from '../SmallComponents/ProjectBanner';
import Heading from '../SmallComponents/Heading';
import ProjectComp from '../SmallComponents/ProjectComp';
import { projectsData } from '../Data/projects';
import { projectsNav } from '../Data/projects';


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
            caselink={works.caselink}
            category={works.category}
          />
}

const WebProjects = () => {
  const [item, setItem] = useState({name: 'All'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  const handleClick = (e, index) => {
  setItem({ name: e.target.textContent });
  setActive(index)
  };

  function portfolioNav(works, index){
    return(
      <button className={`${active === index ? 'text-black bg-[#cca354]':''} 
        filter-btn`} 
        onClick={(e) => {
        handleClick(e, index);
      }} key={index}>{works.name}</button>
    );
  };

  useEffect(()=>{
    if(item.name === 'All'){
      setProjects(projectsData);
    }else{
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    };
  }, [item]);
  return (
    <>
      <ProjectBanner 
        img="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5e1610dac793814c75b843f6_digital-design.svg" 
        imgmd="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5e16172dc793819eecb87450_digital-design-mobile.svg" 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rerum ducimus obcaecati esse quis excepturi autem, eligendi sapiente porro? Itaque."
      />
      
      <section className='mxs:px-7 px-4 py-5 lg:mb-10 md:mb-16 flex flex-col font-nunito'>
        <Heading class='!my-8' heading="Projects" sub="Most recent works" />
        <div className='xs:pt-8 2xs:pt-3 pt-1 xs:pb-10 2xs:pb-7 pb-4'>{projectsNav.map(portfolioNav)}</div>
        {projects.map(portfolio)}
      </section>

    </>
  )
}

export default WebProjects;
