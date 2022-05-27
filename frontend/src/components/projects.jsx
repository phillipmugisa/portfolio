// React
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// router
import { Link, useLocation, useSearchParams } from 'react-router-dom';

// component
import SectionHeading from './utils/sectionHeading';
import {ProjectCard} from './utils/projectCards';

// context
import { AppContext } from '../hooks/AppContext';

// costom hooks
import useFetch from '../hooks/useFetch';

const Projects = () => {

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    const [searchParams] = useSearchParams();

    const [url, setUrl] = useState(() => {
        if (searchParams.get('page'))
        {
            return `projects/?page=${searchParams.get('page')}`
        }
        else if (searchParams.get('search'))
        {
            return `projects/?search=${searchParams.get('search')}`
        }
        else
        {
            return `projects/`
        }

    });
    
    const fetchState = useFetch(url);
    
    const genPages = (count) => {
        let pages = []
        for (let i = 1; i <= count; i++)
        {
            pages.push(i) 
        }
        return pages;
    }

    useEffect(() => {

    }, [url])

    return (
        <section className="projects container grid">
            <SectionHeading headingText={"Projects"} classes="txt-secondary"/>
            
                {
                    !fetchState.data
                    &&
                    <Preloader />
                }

                <div className="news-body grid ">
                    {
                        fetchState.data
                        &&
                        fetchState.data.results.map(obj => {
                        return (
                                <ProjectCard key={obj.id} {...obj}/>
                            )
                        })
                    }
                </div>

            {

                location.pathname === appRoutes.projects ?
                    // <AppButton
                    //     classes="btn br-secondary txt-secondary outlined roundbr loadMore"
                    //     text = 'Load More'
                    //     onClick={() => LoadMoreHandler()}
                    // />
                    <>
                    {
                        fetchState.data &&
                        <div className="paginator flex">
                            {
                                genPages(fetchState.data.pages_count).map((obj, idx) => (<Link key={`paginator-${idx}`} to={`?page=${obj}`} onClick={() => setUrl(`projects/?page=${obj}`)}className="btn paginator-tabs">{obj}</Link>))
                            }
                        </div>
                    }
                    </>
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

const Preloader = () => {
    return (

        <>
            <div className="news-body grid ">
                <div className="project-card grid preloader">
                    <div className="body grid">
                        <div className="project-img-wrapper"></div>
                        <div className="project-card-details grid">
                            <div className="divider"></div>
                            <div className="project-title txt-secondary">
                            </div>
                            <ul className="news-category flex">
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project-card grid preloader">
                    <div className="body grid">
                        <div className="project-img-wrapper"></div>
                        <div className="project-card-details grid">
                            <div className="divider"></div>
                            <div className="project-title txt-secondary">
                            </div>
                            <ul className="news-category flex">
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project-card grid preloader">
                    <div className="body grid">
                        <div className="project-img-wrapper"></div>
                        <div className="project-card-details grid">
                            <div className="divider"></div>
                            <div className="project-title txt-secondary">
                            </div>
                            <ul className="news-category flex">
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Projects.prototype = {
    url : PropTypes.string.isRequired,
}

export default Projects;