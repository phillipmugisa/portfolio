import React from "react";
import PropTypes from 'prop-types';

import TestImg from './test.png'

import AppButton from './appButton'

import icons from './icons';

const ProjectCard = ({ProjectId}) => {
    return (
        <div className="project-card grid">
            <div className="project-stacks grid">
                <ProjectCardStack icon={icons.Django}/>
                <ProjectCardStack icon={icons.Postgresql}/>
                <ProjectCardStack icon={icons.React}/>
            </div>
            <div className="body grid">
                <div className="project-img-wrapper">
                    <img src={TestImg} alt="test" />
                </div>
                <div className="project-card-details grid">
                    <h4 className="project-title txt-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                    <p className="project-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae suscipit optio in? Aspernatur quis magnam repudiandae excepturi sunt consectetur provident quasi temporibus modi architecto deserunt eveniet doloremque magni, minus veritatis modi architecto deserunt eveniet doloremque magni, minus veritatis
                    </p>
                    <div className="project-tags flex">
                    <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'UI/UX Design'
                            onClickUrl=''
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Web Development'
                            onClickUrl=''
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Mobile App Development'
                            onClickUrl=''
                        />
                    </div>
                    <AppButton
                        classes="bg-secondary txt-white cta roundbr"
                        text = 'View Project'
                        onClickUrl=''
                    />

                </div>
            </div>
        </div>
    );
}

const MinProjectCard = ({ProjectId}) => {
    return (
        <div>
            
        </div>
    );
}

const ProjectCardStack = ({icon}) => {
    return (
        <div className="project-card-stack">
            {icon}
        </div>
    );
}

ProjectCard.propTypes = {
    ProjectId: PropTypes.number.isRequired,
}

MinProjectCard.propTypes = {
    ProjectId: PropTypes.number.isRequired,
}
 
export {ProjectCard, MinProjectCard};