// react
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// router
import { Link } from 'react-router-dom';

// component
// import TestImg from './test.png'
// import AppButton from './appButton'
// import icons from './icons';

// context
import { AppContext } from '../../hooks/AppContext';

const ProjectCard = ({id, stack, field, title, slug, img_url}) => {
    
    const {appRoutes} = useContext(AppContext);

    return (
        <div className="project-card grid">
            {/* <div className="project-stacks grid">
                <ProjectCardStack icon={icons.Django}/>
                <ProjectCardStack icon={icons.Postgresql}/>
                <ProjectCardStack icon={icons.React}/>
            </div> */}
            <Link to={`${appRoutes.projects}/${slug}/${id}`}>
                <div className="body grid">
                    <div className="project-img-wrapper">
                        <img src={img_url} alt="test" />
                    </div>
                    <div className="project-card-details grid">
                        <div className="divider"></div>
                        <h4 className="project-title txt-secondary">
                            {title}
                        </h4>
                        <ul className="news-category flex">
                            <Link
                                to={`${appRoutes.projects}/?search=${field[0]}`}
                                className="footer-part-link"
                            >
                                <li>{field[0]}</li>
                            </Link>
                            <Link
                                to={`${appRoutes.projects}/?search=${stack[0]}`}
                                className="footer-part-link"
                            >
                                <li>{stack[0]}</li>
                            </Link>
                        </ul>
                        {/* <p className="project-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae suscipit optio in? Aspernatur quis magnam repudiandae excepturi sunt consectetur provident quasi temporibus modi architecto deserunt eveniet doloremque magni, minus veritatis modi architecto
                        </p> */}
                        {/* <div className="project-tags flex">
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
                        </div> */}

                        {/* <AppButton
                            classes="bg-secondary txt-white cta roundbr"
                        >
                            <Link to={`${appRoutes.projects}/childsHope/1`}>View Project</Link>
                        </AppButton> */}

                    </div>
                </div>
            </Link>
        </div>
    );
}

const MinProjectCard = ({id, stack, field, title, slug, description}) => {
  
    const {appRoutes} = useContext(AppContext);

    return (
        <div className="project-card mini grid">
            <div className="body grid">
                <div className="project-card-details mini grid">
                    <Link to={`${appRoutes.projects}/${slug}/${id}`}>
                        <h4 className="project-title txt-secondary">
                            {title}
                        </h4>
                    </Link>                    
                    <p className="project-description">
                        {description.slice(0,100)}
                    </p>
                    <ul className="news-category flex">
                        <Link
                            to={`${appRoutes.projects}/?search=${field[0]}`}
                            className="footer-part-link"
                        >
                            <li>{field[0]}</li>
                        </Link>
                        <Link
                            to={`${appRoutes.projects}/?search=${stack[0]}`}
                            className="footer-part-link"
                        >
                            <li>{stack[0]}</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// const ProjectCardStack = ({icon}) => {
//     return (
//         <div className="project-card-stack">
//             {icon}
//         </div>
//     );
// }

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    stack : PropTypes.array.isRequired,
    field : PropTypes.array.isRequired,
    title : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    img_url : PropTypes.string
}

MinProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    stack : PropTypes.array.isRequired,
    field : PropTypes.array.isRequired,
    title : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}
 
export {ProjectCard, MinProjectCard};