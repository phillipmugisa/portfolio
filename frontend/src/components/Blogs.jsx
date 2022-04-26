import React from 'react';

import BlogCard from './utils/BlogCard';
import SectionHeading  from './utils/sectionHeading';

const Blogs = () => {
    return (
        <section className="blogs container grid">
            <SectionHeading headingText={"Blog Articles"} classes="txt-secondary"/>
            <div className="blogs-body horizontal-scroll grid">
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
                <BlogCard blogId = {1}/>
            </div>
        </section>
    );
}
 
export default Blogs;