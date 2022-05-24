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

    const showCommentModel = (id) => {

        // dim background
        const mainElem = document.querySelector('.main-section');        
        if (!mainElem.classList.contains("fade"))
        {
            mainElem.classList.add("fade")
        }

        // show model on screen
        const model = document.querySelector("#comment-model");
        if (!model.classList.contains("in-view"))
        {
            model.classList.add("in-view");
            const blog_id_input_field = model.querySelector("#blog_id");
            // set model id input to id argumnet
            blog_id_input_field.value = id;
        }
    }

    return (
        <div className="blog-card grid">
            <Link to={`${appRoutes.blogs}/sheHarbour/${blogId}`}>                    
                <h4 className="blog-card-title txt-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </Link>
            <p className="blog-card-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui non nemo dolorem, sed eligendi ipsa vero sapiente dignissimos natus ut.
            </p>
            <div className="blog-card-reaction flex mg-block-sm">
                {icons.Heart}
                {icons.Share}
                <span onClick={() => showCommentModel(blogId)}>
                    {icons.Comment}
                </span>
            </div>
        </div>
    );
}

BlogCard.propTypes = {
    blogId: PropTypes.number.isRequired
}

export default BlogCard;