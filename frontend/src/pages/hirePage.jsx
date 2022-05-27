// react
import React, { useRef, useReducer } from  'react';

// react-router-dom

// custom hooks
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';

const initialState = {
    title : "",
    email : "",
    description : "",
    origin : "website",
    field : [],
    stack : []
}

const reducer = (state, action) => {
    switch (action.type)
    {
        case "SETNAME":
            return {...state, title: action.payload};
        case "SETEMAIL":
            return {...state, email: action.payload};
        case "SETDESCRIPTION":
            return {...state, description: action.payload};
        case "SETFIELDS":
            let field;
            if (state.field.includes(action.payload))
            {
                field = state.field
                field.map((obj, idx) => {
                    if (obj === action.payload)
                    {
                        field.splice(idx, 1);
                    }
                    return true;
                })
            }
            else
            {
                field = state.field;
                field.push(action.payload);
            }
            return {field: field, ...state};
        case "SETSTACKS":
            let stack;
            if (state.stack.includes(action.payload))
            {
                stack = state.stack
                stack.map((obj, idx) => {
                    if (obj === action.payload)
                    {
                        stack.splice(idx, 1);
                    }
                    return true;
                })
            }
            else
            {
                stack = state.stack;
                stack.push(action.payload);
            }
            return {stack: stack, ...state};

        default:
            return state;
    }
}

const HirePage = () => {

    const formElem = useRef(null);

    const fetchStacksState = useFetch('stacks/');
    const fetchFieldsState = useFetch('fields/');
    const postHandler = usePost('projects/');

    const [state, dispatch] = useReducer(reducer, initialState)

    const showTags = (e) => {
        e.preventDefault();
        const targetId = e.target.id;

        if (e.target.textContent === "+")
        {
            e.target.textContent = "-";
        }
        else
        {
            e.target.textContent = "+";
        }
        
        if (targetId === "categories-lower-btn")
        {
            document.getElementById("categories-body")
                .classList.toggle("visible");
        }
        else if (targetId === "stacks-lower-btn")
        {
            document.getElementById("form-stacks")
                .classList.toggle("visible");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postHandler(state);
        formElem.current.reset();
    }

    const handleStackField = (elem, category, value) => {
        elem.classList.toggle("selected");
        if (category === "fields")
        {
            dispatch({type:"SETFIELDS", payload: value})
        }
        else if (category === "stacks")
        {
            dispatch({type:"SETSTACKS", payload: value})
        }
    }

    return (
        <section className="hire container grid">
            <div className="contact-intro grid">
                <h3 className="txt-primary greetings">Thank you for showing interest in our services.</h3>
                <p className="sub-greetings">Please fill in the following information, we shall get back to you as soon as possible.</p>
            </div>
            <div className="divider"></div>
            <div className="contact-form grid">
                <form className='contact grid' ref={formElem} onSubmit={handleSubmit}>
                    <fieldset className='grid'>
                        <div className="form-group grid">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" required onChange={event => dispatch({type:"SETEMAIL", payload: event.target.value})}/>
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="name">Project Name *</label>
                            <input type="text" id="name" required onChange={event => dispatch({type:"SETNAME", payload: event.target.value})}/>
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="project-description">Project Description *</label>
                            <textarea rows="5" id="project-description" required onChange={event => dispatch({type:"SETDESCRIPTION", payload: event.target.value})}></textarea>
                        </div>
                    </fieldset>

                    <fieldset style={{display: "grid", gap : "1rem"}}>                        
                        <div className="optional-fields grid">
                            <div className="header flex">
                                <span className="header-text">Select Category</span>
                                <button onClick={(e) => showTags(e)} id="categories-lower-btn">+</button>
                            </div>
                            <div className="body flex" id="categories-body">
                                {
                                    fetchFieldsState.data
                                    &&
                                    fetchFieldsState.data.results.map(
                                        obj => <span className="form-tags" onClick={(e) => handleStackField(e.target, 'fields', obj.name)} key={`field-${obj.name}`}>{obj.name}</span>
                                    )
                                }
                            </div>
                        </div>

                        <div className="optional-fields grid">
                            <div className="header flex">
                                <span className="header-text">Select Technologies</span>
                                <button onClick={(e) => showTags(e)} id="stacks-lower-btn">+</button>
                            </div>
                            <div className="body flex" id="form-stacks">
                                {
                                    fetchStacksState.data
                                    &&
                                    fetchStacksState.data.results.map(
                                        obj => <span className="form-tags" onClick={(e) => handleStackField(e.target, 'stacks', obj.name)} key={`stack-${obj.name}`}>{obj.name}</span>
                                    )
                                }
                            </div>
                        </div>
                    </fieldset>
                    
                    <fieldset className="flex">
                        <div className="form-group form-submit-area grid">
                            <input className="form-submit bg-primary txt-white" type="submit" value="Submit"/>
                        </div>
                    </fieldset>
                </form>
            </div>
            
            <div className="divider"></div>
        </section>
    );
}
 
export default HirePage;