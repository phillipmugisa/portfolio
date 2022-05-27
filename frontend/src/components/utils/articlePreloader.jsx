import React from 'react';

const ArticlePreloader = () => {
    return (
        <section className="article preloader container grid">
            <div className="article-start-infor grid">
                <div className="article-heading"></div>
            </div>
            <div className="article-img-stats grid">
                <div className="img-wrapper grid"></div>
            </div>
            <div className="flex" style={{"flexWrap":"wrap"}}>
                <div className="article-time-stats flex"></div>
                <div className="article-time-stats flex git-link"></div>
            </div>
            <div className="article-category-tags flex"></div>
            <p className="article-discription grid"></p>
            <p className="article-discription grid"></p>
            <p className="article-discription grid"></p>
            <p className="article-discription grid"></p>
            <p className="article-discription grid"></p>
            <p className="article-discription grid"></p>
        </section>
    )
}

export default ArticlePreloader;