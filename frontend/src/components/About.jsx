import React from 'react';
import SectionHeading from './utils/sectionHeading';

const About = () => {
    return (
        <section className="about container-fuild grid bg-primary pd-block-3">
            <SectionHeading headingText={"Who is mugisa?"} classes="txt-white"/>
            <div className="about-body container grid">
                <div className="img-wrapper">
                    <img loading="lazy" src={process.env.PUBLIC_URL + '/Me.jpg'} alt="phillip mugisa" className="about-img" />
                </div>
                <div className="about-discription grid">
                    <p>
                        I am Mugisa Phillip, a Full-Stack Software Developer with 4 years working experience. I am well-verse with various technologies in different software fields ranging from web development, mobile application development, Ui/Ux Design etc.
                        <br/>
                        My years of experience are backed with various projects which have exposed me to the different tasks in the different software fields.
                    </p>
                    <div className="sub-details grid">
                        <p>
                            <span className="title">Work Experience</span>
                            <span className="value">4 years</span>
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