import React from 'react';
import PropTypes from 'prop-types';

import SectionHeading from './utils/sectionHeading';
import useFetch from '../hooks/useFetch';

const ScrapperNews = () => {

    const fetchState = useFetch('news');

    return (          
        <section className="news container grid">
            <div className="section-heading-wrapper grid">                
                <SectionHeading headingText={"Tech News"} classes="txt-primary"/>
                <p className="section-sub-heading txt-secondary">Please Note that the following news is scrapped from different sources.</p>
            </div>
                { !fetchState.data && <Preloader />}     
                { fetchState.data &&
                    <div className="news-body grid">
                        {fetchState.data.results.map(obj => {
                        return (
                                <NewsCard key={obj.id} {...obj}/>
                            )
                        })}
                    </div>
                }
        </section>
    );
}

const NewsCard = ({id, title, url, description, source}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            tooltip={title}
        >
            <div className="news-card grid txt-white">
                <h4 className="news-title">{title.slice(0,25)}</h4>
                <p className="news-description">{description.slice(0,100)}</p>
                <ul className="news-category flex">
                    <li>{source}</li>
                </ul>
            </div>
        </a>
    );
}

const Preloader = () => {
    return (
        <div className="news-body grid">
            <div className="news-card preloader grid txt-white">
                <div className="news-title"></div>
                <p className="news-description"></p>
                <p className="news-description"></p>
                <ul className="news-category flex">
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="news-card preloader grid txt-white">
                <div className="news-title"></div>
                <p className="news-description"></p>
                <p className="news-description"></p>
                <ul className="news-category flex">
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="news-card preloader grid txt-white">
                <div className="news-title"></div>
                <p className="news-description"></p>
                <p className="news-description"></p>
                <ul className="news-category flex">
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
 
NewsCard.propTypes = {
    id: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    source : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}
 
export default ScrapperNews;