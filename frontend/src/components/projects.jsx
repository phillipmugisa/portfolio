// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// router
import { NavLink, useLocation } from 'react-router-dom';

// component
import SectionHeading from './utils/sectionHeading';
import {ProjectCard} from './utils/projectCards';

// context
import { AppContext } from '../hooks/AppContext';

const Projects = ({ url }) => {

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    // const LoadMoreHandler = () => {
    //     // load more items
    // }

    return (
        <section className="projects container grid">
            <SectionHeading headingText={"Projects"} classes="txt-secondary"/>
            <div className="projects-body grid">
                <ProjectCard ProjectId={1}/>
                <ProjectCard ProjectId={1} />
                <ProjectCard ProjectId={1} />
            </div>

            {

                location.pathname === appRoutes.projects ?
                    // <AppButton
                    //     classes="btn br-secondary txt-secondary outlined roundbr loadMore"
                    //     text = 'Load More'
                    //     onClick={() => LoadMoreHandler()}
                    // />
                    
                    <div className="paginator flex">
                        <NavLink to="/page/1" className="btn paginator-tabs active">1</NavLink>
                        <NavLink to="/page/2" className="btn paginator-tabs">2</NavLink>
                        <NavLink to="/page/3" className="btn paginator-tabs">3</NavLink>
                        <NavLink to="/page/4" className="btn paginator-tabs">4</NavLink>
                    </div>
                :
                <></>
                    // <Link
                    //     to={`${appRoutes.projects}`}
                    // >
                    //     <AppButton
                    //         classes="btn br-secondary txt-secondary outlined roundbr loadMore"
                    //         text = 'View All'
                    //     />
                    // </Link>
            }
        </section>
    );
}

Projects.prototype = {
    url : PropTypes.string.isRequired,
}

export default Projects;