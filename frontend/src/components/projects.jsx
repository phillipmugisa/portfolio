import React from 'react';

import SectionHeading from './utils/sectionHeading'
import {ProjectCard} from './utils/projectCards'

const Projects = () => {
    return (
        <section className="projects container grid">
            <SectionHeading headingText={"Projects"} classes="txt-secondary"/>
            <div className="projects-body grid">
                <ProjectCard  />
                <ProjectCard  />
            </div>
        </section>
    );
}
 
export default Projects;