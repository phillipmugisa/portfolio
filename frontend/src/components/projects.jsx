// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// router
import { Link, useLocation } from 'react-router-dom';

// component
import SectionHeading from './utils/sectionHeading';
import {ProjectCard} from './utils/projectCards';
import AppButton from './utils/appButton';

// context
import { AppContext } from '../hooks/AppContext';

const Projects = ({ url }) => {

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    const LoadMoreHandler = () => {
        // load more items
    }

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
                    <AppButton
                        classes="bg-accent txt-white roundbr loadMore"
                        text = 'Load More'
                        onClick={() => LoadMoreHandler()}
                    />
                :
                    <Link
                    className="loadMore"
                        to={`${appRoutes.projects}`}
                    >
                        <AppButton
                            classes="bg-accent txt-white roundbr loadMore"
                            text = 'View All'
                        />
                    </Link>
            }
        </section>
    );
}

Projects.prototype = {
    url : PropTypes.string.isRequired,
}

export default Projects;