// react
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// components
import icons from './icons';

// router
import { Link } from 'react-router-dom';

// context
import { AppContext } from '../../hooks/AppContext';

// custom hooks
import usePost from '../../hooks/usePost';

const BlogCard = ({id, title, slug, description}) => {
  
    const {appRoutes} = useContext(AppContext);
    const postLikeHandler = usePost(`reactions/blogs/${slug}`);

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
            <Link to={`${appRoutes.blogs}/${slug}/${id}`}>             
                <h4 className="blog-card-title txt-primary">
                    {title}
                </h4>
            </Link>
            <p className="blog-card-description">
                {description.slice(0,120)}
            </p>
            <div className="blog-card-reaction flex mg-block-sm">
                <div onClick={() => postLikeHandler()}>
                    {icons.Heart}
                </div>
                {icons.Share}
                <span onClick={() => showCommentModel(slug)}>
                    {icons.Comment}
                </span>
            </div>
        </div>
    );
}

BlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default BlogCard;