// react
import React, {useContext} from 'react'

// router
import { useParams, Link } from 'react-router-dom';

// components
import { MinProjectCard } from '../components/utils/projectCards';
import SectionHeading from '../components/utils/sectionHeading';
import ArticlePreloader from '../components/utils/articlePreloader';

// costom hooks
import useFetch from '../hooks/useFetch';

import { AppContext } from '../hooks/AppContext';

const SingleProjectPage = () => {

    const { slug, id } = useParams();
    const fetchState = useFetch(`projects/${slug}`);

    const {appRoutes} = useContext(AppContext);

    return (
        <React.Fragment>
            {
                fetchState.error.isError
                &&
                <h1>{fetchState.error.error_code}</h1>
            }
            {
                !fetchState.data
                &&
                <ArticlePreloader />
            }
            {
                fetchState.data
                &&
                <section className="article container grid">
                    <div className="article-start-infor grid">
                        <h4 className="article-heading">
                            {fetchState.data.title}
                        </h4>
                    </div>
                    <div className="divider"></div>
                    <div className="article-img-stats grid">
                        <div className="img-wrapper grid">
                            { fetchState.data.img_url && <img loading="lazy" src={fetchState.data.img_url} alt={fetchState.data.title} /> }
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex" style={{"flexWrap":"wrap"}}>
                        <div className="article-time-stats flex">
                            <span className="start-date">{fetchState.data.added_on}</span>
                            <span> - </span>
                            <span className="end-date">
                                {fetchState.data.end_date ? fetchState.data.end_date : "To-Date"}
                            </span>
                        </div>
                        <div className="article-time-stats flex git-link">
                            <span className="start-date">GitHub</span>
                            <span> : </span>
                            <span className="end-date txt-accent">
                                <a
                                    href={fetchState.data.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                {fetchState.data.github_url}
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="article-category-tags flex">
                        {
                            fetchState.data.field.map(obj => {
                                return (
                                    <Link
                                        key={`${obj}-${id}`}
                                        to={`${appRoutes.projects}/?search=${obj}`}
                                        className="btn br-secondary txt-secondary outlined tag roundbr"
                                    >
                                        {obj}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <p className="article-discription grid">
                        {fetchState.data.description}
                    </p>
                    <div className="article-stacks-used grid gap-sm">
                        <h4 className="article-stacks-used-heading txt-secondary">Technologies Used.</h4>
                        <div className="article-stacks-used-body flex gap-sm" style="flex-wrap: wrap">
                            {
                                fetchState.data.stack.map(obj => {
                                    return (
                                        <Link
                                            key={`${obj}-${id}`}
                                            to={`${appRoutes.projects}/?search=${obj}`}
                                            className="btn br-secondary txt-secondary outlined tag roundbr"
                                        >
                                            {obj}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {
                        fetchState.data.production_url
                        &&
                        <a
                            href={fetchState.data.production_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-primary txt-white visit-site"
                        >
                            Visit Project
                        </a>
                    }
                </section>
            }
            {
                fetchState.data 
                &&
                <RelatedProjects field={fetchState.data.field[0]} />
            }
        </React.Fragment>
    );
}

const RelatedProjects = ({field}) => {

    const _fetchState = useFetch(`projects/?search=${field}`);

    return (
        <section className="projects related container grid">
            <SectionHeading headingText={"Related Projects"} classes="txt-secondary"/>
            { 
                _fetchState.data
                &&
                <div className="section-body grid"> 
                    {
                        _fetchState.data.results.slice(0,3).map(obj => {
                        return (
                                <MinProjectCard key={obj.id} {...obj}/>
                            )
                        })
                    }
                </div>
            } 
        </section>
    )
}
 
export default SingleProjectPage;
