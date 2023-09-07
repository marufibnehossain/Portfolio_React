import React, { useEffect, useState } from 'react';
import ProjectBanner from '../SmallComponents/ProjectBanner';
import Heading from '../SmallComponents/Heading';
import ProjectComp from '../SmallComponents/ProjectComp';
import { projectsData } from '../Data/projects';
import { projectsNav } from '../Data/projects';
import webImgR from '../../assets/images/Outline-text/websiteR.png';
import webImgRmd from '../../assets/images/Outline-text/websiteRmd.png';

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

const Research = () => {
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
        img= {webImgR} 
        imgmd={webImgRmd} 
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rerum ducimus obcaecati esse quis excepturi autem, eligendi sapiente porro? Itaque."
      />
      
      <section className='mxs:px-7 px-4 py-5 lg:mb-10 md:mb-16 flex flex-col font-nunito'>
        <Heading class='!my-8' heading="Research Projects" sub="Most recent works" />
        <div className='xs:pt-8 2xs:pt-3 pt-1 xs:pb-10 2xs:pb-7 pb-4'>{projectsNav.map(portfolioNav)}</div>
        {projects.map(portfolio)}
      </section>

    </>
  )
}

export default Research;
