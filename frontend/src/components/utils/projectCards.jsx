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
                <div className="body grid">
                    <Link to={`${appRoutes.projects}/${slug}/${id}`}>
                        <div className="project-img-wrapper">
                            <img src={img_url} alt="test" />
                        </div>
                    </Link>
                    <div className="project-card-details grid">
                        <div className="divider"></div>
                        <Link to={`${appRoutes.projects}/${slug}/${id}`}>
                            <h4 className="project-title txt-secondary">
                                {title}
                            </h4>
                        </Link>
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