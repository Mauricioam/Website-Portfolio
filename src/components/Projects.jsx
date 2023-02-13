import React from "react";
import image from "../assets/computer-photo.jpg";
import ProjectTitles from "./ProjectTitles";
import Titles from "./Titles";
import { projectsDescription } from "../utils/ProjectsDescription";
import ComputerFrame from "./ComputerFrame";

function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col  w-screen    "
    >
      <Titles title="Projects" />
      {projectsDescription.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-5 items-center  ">
          <ComputerFrame frameImg={image} img={item.image} />
          <ProjectTitles
            title={item.title}
            href={item.href}
            description={item.description}
            github={item.github}
            keyword={item.keyword}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
