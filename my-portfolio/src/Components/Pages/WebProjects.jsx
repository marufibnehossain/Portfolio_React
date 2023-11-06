import React, { useEffect, useState } from 'react';
import ProjectBanner from '../SmallComponents/ProjectBanner';
import Heading from '../SmallComponents/Heading';
import ProjectComp from '../SmallComponents/ProjectComp';
import { projectsData } from '../Data/projects';
import { projectsNav } from '../Data/projects';
import webImg from '../../assets/images/Outline-text/Website.webp';
import webImgmd from '../../assets/images/Outline-text/websitemd.webp';

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
        img= {webImg} 
        imgmd={webImgmd} 
        text="I craft and enhance digital experiences through code, creativity, and innovation. I have a passion for refining the smallest details and transforming significant challenges into extraordinary web solutions."
      />
      
      <section className='mxs:px-7 px-4 py-5 lg:mb-10 md:mb-16 flex flex-col font-nunito'>
        <Heading class='!my-8' HeadColor= "text-[#D4D4D4]" heading="Projects" sub="Most recent works" />
        <div className='xs:pt-8 2xs:pt-3 pt-1 xs:pb-10 2xs:pb-7 pb-4'>{projectsNav.map(portfolioNav)}</div>
        {projects.map(portfolio)}
      </section>

    </>
  )
}

export default WebProjects;
