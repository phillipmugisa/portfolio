// react
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// router
import { Link } from 'react-router-dom';

// component
import TestImg from './test.png'
import AppButton from './appButton'
import icons from './icons';

// context
import { AppContext } from '../../hooks/AppContext';

const ProjectCard = ({ProjectId}) => {
  
  const {appRoutes} = useContext(AppContext);

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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae suscipit optio in? Aspernatur quis magnam repudiandae excepturi sunt consectetur provident quasi temporibus modi architecto deserunt eveniet doloremque magni, minus veritatis modi architecto
                    </p>
                    <div className="project-tags flex">
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'UI/UX Design'
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Web Development'
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Mobile App Development'
                        />
                    </div>
                    <AppButton
                        classes="bg-secondary txt-white cta roundbr"
                    >
                        <Link to={`${appRoutes.projects}/childsHope/1`}>View Project</Link>
                    </AppButton>

                </div>
            </div>
        </div>
    );
}

const MinProjectCard = ({ProjectId}) => {
  
    const {appRoutes} = useContext(AppContext);

    return (
        <div className="project-card mini grid">
            <div className="body grid">
                <div className="project-card-details grid">
                    <Link to={`${appRoutes.projects}/sheHarbour/2`}>
                        <h4 className="project-title txt-secondary">Lorem ipsum dolor, sit amet consectetur.</h4>
                    </Link>                    
                    <p className="project-description">
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little
                    </p>
                </div>
            </div>
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