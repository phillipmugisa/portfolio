// React
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// router
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import BlogCard from './utils/BlogCard';
import SectionHeading  from './utils/sectionHeading';

import { AppContext } from '../hooks/AppContext';

// costom hooks
import useFetch from '../hooks/useFetch';

const Blogs = (props) => {

    // const url = props.url;
    const blogBodyIsHorizontal = props.isHorizontal;

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    const [searchParams] = useSearchParams();

    const [url, setUrl] = useState(() => {
        if (searchParams.get('page'))
        {
            return `blogs/?page=${searchParams.get('page')}`
        }
        else if (searchParams.get('search'))
        {
            return `blogs/?search=${searchParams.get('search')}`
        }
        else
        {
            return `blogs/`
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

    return (
        <section className="blogs container grid">
            <SectionHeading headingText={"Blog Posts"} classes="txt-secondary"/>
            { 
                !fetchState.data
                &&
                <Preloader blogBodyIsHorizontal={blogBodyIsHorizontal}/>
            } 
            { 
                fetchState.data
                &&
                <div className={`blogs-body ${ blogBodyIsHorizontal ? "horizontal-scroll" : "grid-list"} grid`}>
                    {
                        fetchState.data.results.map(obj => {
                        return (
                                <BlogCard key={obj.id} {...obj}/>
                            )
                        })
                    }
                </div>
            } 

            {
                location.pathname === appRoutes.blogs ?
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
                                genPages(fetchState.data.pages_count).map((obj, idx) => (<Link key={`paginator-${idx}`} to={`?page=${obj}`} onClick={() => setUrl(`blogs/?page=${obj}`)}className="btn paginator-tabs">{obj}</Link>))
                            }
                        </div>
                    }
                    </>
                :
                    <></>
                    // <Link
                    //     to={`${appRoutes.blogs}`}
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

const Preloader = ({blogBodyIsHorizontal}) => {
    return (

        <div className={`blogs-body ${ blogBodyIsHorizontal ? "horizontal-scroll" : "grid-list"} grid`}>
            <div className="blog-card preloader grid">     
                <div className="blog-card-title txt-primary"></div>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <div className="blog-card-reaction flex mg-block-sm">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="blog-card preloader grid">     
                <div className="blog-card-title txt-primary"></div>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <div className="blog-card-reaction flex mg-block-sm">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="blog-card preloader grid">     
                <div className="blog-card-title txt-primary"></div>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <p className="blog-card-description"></p>
                <div className="blog-card-reaction flex mg-block-sm">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

Blogs.prototype = {
    url : PropTypes.string.isRequired,
    isHorizontal : PropTypes.bool
}

export default Blogs;
