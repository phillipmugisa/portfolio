import React from 'react';

const CommentModel = () => {

    const closeCommentModel = () => {
        const model = document.querySelector("#comment-model");
        if (model.classList.contains("in-view"))
        {
            const comment_model_form = model.querySelector("form");
            comment_model_form.reset()
            model.classList.remove("in-view");
        }

        const mainElem = document.querySelector('.main-section');        
        if (mainElem.classList.contains("fade"))
        {
            mainElem.classList.remove("fade")
        }
    }

    return (
        <div className="model grid" id="comment-model">
            <form action="" method="post" className="grid gap-1">
                <input type="hidden" name="" id="blog_id" />
                <div className="form-group grid">
                    <label htmlFor="name">Comment</label>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div className="form-group grid">
                    <label htmlFor="name">Code Snippet</label>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div className="form-group form-submit-area grid">
                    <input className="form-submit bg-primary txt-white" type="submit" value="Submit"/>
                </div>
            </form>
            <button
                className="form-submit bg-white txt-primary"
                style={{"margin":"1rem 0", "border" : "1px solid grey", "borderRadius":".5rem"}}
                onClick={() => closeCommentModel()}
            >
                Cancel
            </button>
        </div>
    );
}

export default CommentModel;