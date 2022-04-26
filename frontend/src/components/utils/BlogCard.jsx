import React from 'react';
import PropTypes from 'prop-types';

import icons from './icons';

const BlogCard = ({blogId}) => {
    return (
        <div className="blog-card grid">
            <h4 className="blog-card-title txt-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p className="blog-card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui non nemo dolorem, sed eligendi ipsa vero sapiente dignissimos natus ut.
            </p>
            <div className="blog-card-reaction flex mg-block-sm">
                {icons.Heart}
                {icons.Share}
                {icons.Comment}
            </div>
        </div>
    );
}

BlogCard.propTypes = {
    blogId: PropTypes.number.isRequired
}

export default BlogCard;