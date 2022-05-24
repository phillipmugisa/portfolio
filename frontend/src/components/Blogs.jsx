import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';

import BlogCard from './utils/BlogCard';
import SectionHeading  from './utils/sectionHeading';

import { AppContext } from '../hooks/AppContext';

const Blogs = (props) => {

    // const url = props.url;
    const blogBodyIsHorizontal = props.isHorizontal;

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    // const LoadMoreHandler = () => {

    // }

    return (
        <section className="blogs container grid">
            <SectionHeading headingText={"Blog Posts"} classes="txt-secondary"/>
            <div className={`blogs-body ${ blogBodyIsHorizontal ? "horizontal-scroll" : "grid-list"} grid`}>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
            </div>

            {
                location.pathname === appRoutes.blogs ?
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

Blogs.prototype = {
    url : PropTypes.string.isRequired,
    isHorizontal : PropTypes.bool
}

export default Blogs;
