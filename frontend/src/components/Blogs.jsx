import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import BlogCard from './utils/BlogCard';
import SectionHeading  from './utils/sectionHeading';
import AppButton from './utils/appButton';

import { AppContext } from '../hooks/AppContext';

const Blogs = (props) => {

    const url = props.url;
    const blogBodyIsHorizontal = props.isHorizontal;

    const location = useLocation();
    const {appRoutes} = useContext(AppContext);

    const LoadMoreHandler = () => {

    }

    return (
        <section className="blogs container-fluid grid pd-inline-3 pd-md-inline-2">
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
                    <AppButton
                        classes="bg-accent txt-white roundbr loadMore"
                        text = 'Load More'
                        onClick={() => LoadMoreHandler()}
                    />
                :
                    <Link
                    className="loadMore"
                        to={`${appRoutes.blogs}`}
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

Blogs.prototype = {
    url : PropTypes.string.isRequired,
    isHorizontal : PropTypes.bool
}

export default Blogs;
