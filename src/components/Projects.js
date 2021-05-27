import React, { useState } from "react";
import { projectsData } from '../data/projectsData';


const Projects = (props) => {
    const [currentProject] = useState(projectsData) 
    const project = currentProject[props.projectNb]

    return (
    <div className="projectContent">

        <div className="content">

            <div className="title-area">
                <h3>{project.title}</h3>
                <div className="technologies">{project.technologies}</div>
                <br></br>
                <a href={project.linkcode} target="blank" rel="nooponer noreferer">
                     {project.linkcodetxt}
                </a><br></br>
                <a href={project.linkcode2} target="blank" rel="nooponer noreferer">
                     {project.linkcodetxt2}
                </a>
            </div>

            <div className="img-area">
                <div className="img-container hover">
                    <img className="img2" src={project.img2} alt={project.title}/>
                    <img className="img1" src={project.img1} alt={project.title}/>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Projects;