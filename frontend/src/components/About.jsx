import React from 'react';
import SectionHeading from './utils/sectionHeading';

const About = () => {
    return (
        <section className="about container-fuild grid bg-primary">
            <SectionHeading headingText={"Who is mugisa?"} classes="txt-white"/>
            <div className="about-body container grid">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + '/Me.jpg'} alt="phillip mugisa" className="about-img" />
                </div>
                <div className="about-discription grid txt-white">
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit libero cumque, culpa, nihil rem placeat recusandae aliquam error deleniti non iure laborum architecto, blanditiis optio voluptatum! Facilis numquam eos, incidunt ex officia quae aliquam asperiores cupiditate natus, ad itaque dolores aliquid esse alias laudantium ipsum! Tenetur dicta esse facilis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit libero cumque, culpa, nihil rem placeat recusandae aliquam error deleniti non iure laborum architecto</p>
                    <div className="sub-details grid">
                        <p>
                            <span className="title">Nationality</span>
                            <span className="value">Ugandan</span>
                        </p>
                        <p>
                            <span className="title">Age</span>
                            <span className="value">21</span>
                        </p>
                        <p>
                            <span className="title">Language</span>
                            <span className="value">English</span>
                        </p>
                    </div>
                    <a href={process.env.PUBLIC_URL + '/Phillip_Mugisa_Resume.pdf'} download="resume" className="text-link hr-accent txt-white" style={{'justifySelf':'flex-end'}}>                             
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
 
export default About;