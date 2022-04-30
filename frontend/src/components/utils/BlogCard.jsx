// react
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import icons from './icons';

// router
import { Link } from 'react-router-dom';

// context
import { AppContext } from '../../hooks/AppContext';

const BlogCard = ({blogId}) => {
  
    const {appRoutes} = useContext(AppContext);

    return (
        <div className="blog-card grid">
            <Link to={`${appRoutes.blogs}/sheHarbour/2`}>                    
                <h4 className="blog-card-title txt-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </Link>
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