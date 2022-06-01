import React, {useState, useRef} from 'react';
import usePost from '../../../hooks/usePost';

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

const CommentModel = () => {

    const [state, setState] = useState(null);
    const formElem = useRef(null);
    const slugField = useRef(null);

    const postHandler = usePost(`blog_comment/}`);

    const handleSubmit = e => {
        e.preventDefault();
        postHandler(state, `blog_comment/${slugField.current.value}`)
        formElem.current.reset();
        closeCommentModel();
    }

    return (
        <div className="model grid" id="comment-model">
            <form action="" method="post" className="grid gap-1" onSubmit={handleSubmit} ref={formElem}>
                <input type="hidden" name="" id="blog_id" ref={slugField}/>
                <div className="form-group grid">
                    <label htmlFor="name">Comment *</label>
                    <textarea rows="3" onChange={e => setState(state => {return {...state, comment: e.target.value}})}></textarea>
                </div>
                <div className="form-group grid">
                    <label htmlFor="name">Code Snippet</label>
                    <textarea rows="3" onChange={e => setState(state => {return {...state, code_snippet: e.target.value}})}></textarea>
                </div>
                {/* <div className="form-group grid">
                    <label htmlFor="code_url">Code Snippet Url</label>
                    <input type="text" name="" id="code_url" onChange={e => setState(state => {return {...state, code_url: e.target.value}})} />
                </div> */}
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