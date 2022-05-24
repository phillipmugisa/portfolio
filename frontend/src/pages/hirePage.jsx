// react
import React, { useRef, useLayoutEffect } from  'react';

// react-router-dom

// components

const HirePage = () => {

    const formElem = useRef(null);
    // const [ selectedCategories, setSelectedCategories ] = useState([]);
    // const [ selectedStacks, setSelectedStacks ] = useState([]);

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
            document.getElementById("form-stacts")
                .classList.toggle("visible");
        }
    }

    useLayoutEffect(() => {
        formElem.current.querySelectorAll(".form-tags").forEach(tag => {
            tag.addEventListener("click", () => {
                tag.classList.toggle("selected")
                
                // add tag to selectedCategories or selectedStacks
            })
        })
    }, [])

    return (
        <section className="hire container grid">
            <div className="contact-intro grid">
                <h3 className="txt-primary greetings">Thank you for showing interest in our services.</h3>
                <p className="sub-greetings">Please fill in the following information and we shall get back to you as soon as possible.</p>
            </div>
            <div className="divider"></div>
            <div className="contact-form grid">
                <form action="" className='contact grid' ref={formElem}>
                    <fieldset className='grid'>
                        <div className="form-group grid">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id="name" />
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" />
                        </div>
                        <div className="form-group grid">
                            <label htmlFor="project-description">Project Description</label>
                            <textarea rows="5" id="project-description"></textarea>
                        </div>
                    </fieldset>

                    <fieldset style={{display: "grid", gap : "1rem"}}>                        
                        <div className="optional-fields grid">
                            <div className="header flex">
                                <span className="header-text">Select Category</span>
                                <button onClick={(e) => showTags(e)} id="categories-lower-btn">+</button>
                            </div>
                            <div className="body flex" id="categories-body">
                                <span className="form-tags">Web Development</span>
                                <span className="form-tags">Mobile Development</span>
                                <span className="form-tags">UI/UX Design</span>
                                <span className="form-tags">Linux</span>
                            </div>
                        </div>

                        <div className="optional-fields grid">
                            <div className="header flex">
                                <span className="header-text">Select Technologies</span>
                                <button onClick={(e) => showTags(e)} id="stacks-lower-btn">+</button>
                            </div>
                            <div className="body flex" id="form-stacts">
                                <span className="form-tags">Django</span>
                                <span className="form-tags">React</span>
                                <span className="form-tags">Nginx</span>
                                <span className="form-tags">Figma</span>
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