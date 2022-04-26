import React from 'react';
import PropTypes from 'prop-types';

import SectionHeading from './utils/sectionHeading';

const ScrapperNews = () => {
    return (          
        <section className="news container grid">
            <div className="section-heading-wrapper grid">                
                <SectionHeading headingText={"Tech News"} classes="txt-primary"/>
                <p className="section-sub-heading txt-secondary">Please Note that the following news is scrapped from different sources.</p>
            </div>
            <div className="news-body grid">
                <NewsCard newsId = {1}/>
                <NewsCard newsId = {1}/>
                <NewsCard newsId = {1}/>
                <NewsCard newsId = {1}/>
                <NewsCard newsId = {1}/>
                <NewsCard newsId = {1}/>
            </div>
        </section>
    );
}

const NewsCard = () => {
    return (
        <div className="news-card grid txt-white">
            <h4 className="news-title">Lorem ipsum dolor sit amet</h4>
            <p className="news-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime voluptatum.</p>
            <ul className="news-category flex">
                <li>Web Development</li>
                <li>Google News</li>
            </ul>
        </div>
    );
}
 
NewsCard.propTypes = {
    newsId : PropTypes.number.isRequired
}
 
export default ScrapperNews;