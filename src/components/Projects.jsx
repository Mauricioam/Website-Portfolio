import React from 'react';
import image from "../assets/computer-photo.jpg";
import projectImageWeather from "../assets/Weather-app.jpg";
import projectImageAlkeFlix from "../assets/AlkeFlix.jpg"
import ProjectTitles from './ProjectTitles';
import Titles from './Titles';
import { projectsDescription } from '../utils/ProjectsDescription';
import ComputerFrame from './ComputerFrame';

function Projects() {
  return (
    <div id='Projects' className='flex flex-col  w-screen md:px-20   min-h-[40rem]  '>
     <Titles title="Projects"/>
    <div className='flex flex-col md:flex-row gap-5 items-center -mb-32 '>
        <ComputerFrame frameImg={image} width={"39.3"} height={"21.7"} rigth={"45.7"} top={"10.3"} img={projectImageWeather} />
        <ProjectTitles title={projectsDescription[0].title} href={projectsDescription[0].href} description={projectsDescription[0].description} github={projectsDescription[0].github}/>
    </div> 
     <div className='flex flex-col md:flex-row gap-9 items-center '>
        <ComputerFrame frameImg={image} width={"39.3"} height={"21.7"} rigth={"45.7"} top={"10.3"} img={projectImageAlkeFlix} />
        <ProjectTitles title={projectsDescription[1].title} href={projectsDescription[1].href} description={projectsDescription[1].description} github={projectsDescription[1].github}/>
    </div>  

</div>
  )
}

export default Projects;