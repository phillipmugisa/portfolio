import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from './utils/sectionHeading';

import icons from './utils/icons'

const StacksUsed = () => {
    return (
        <section className="about container-fuild grid bg-primary">
            <SectionHeading headingText={"Mugisa's Tech Stack"} classes="txt-white"/>
            <div className="stacks-body container grid">
                <div className="stack-category grid">
                    <h4 className="stack-category-title txt-white">Frontend</h4>
                    <div className="stack-category-icons grid">
                        <StackIcon classes="txt-white" name="Html5" icon={icons.Html5}/>
                        <StackIcon classes="txt-white" name="Css3" icon={icons.Css3}/>
                        <StackIcon classes="txt-white" name="ReactJs" icon={icons.ReactJs}/>
                        <StackIcon classes="txt-white" name="Javascript" icon={icons.Javascript}/>
                        <StackIcon classes="txt-white" name="Flutter" icon={icons.Flutter}/>
                    </div>
                </div>
                <div className="stack-category grid">
                    <h4 className="stack-category-title txt-white">Backend</h4>
                    <div className="stack-category-icons grid">
                        <StackIcon classes="txt-white" name="Python" icon={icons.Python }/>
                        <StackIcon classes="txt-white" name="Django" icon={icons.Django }/>
                        <StackIcon classes="txt-white" name="MySql" icon={icons.MySql }/>
                        <StackIcon classes="txt-white" name="Postgresql" icon={icons.Postgresql }/>
                        <StackIcon classes="txt-white" name="Flask" icon={icons.Flask }/>
                    </div>
                </div>
                <div className="stack-category grid">
                    <h4 className="stack-category-title txt-white">Tools</h4>
                    <div className="stack-category-icons grid">
                        <StackIcon classes="txt-white" name="Github" icon={icons.Github }/>
                        <StackIcon classes="txt-white" name="Nginx" icon={icons.Nginx }/>
                        <StackIcon classes="txt-white" name="Figma" icon={icons.Figma }/>
                        <StackIcon classes="txt-white" name="Linux" icon={icons.Linux }/>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default StacksUsed;

const StackIcon = ({classes, name, icon}) => {
    return (
        <div className={`stack-catogory-icon-wrapper grid ${classes}`}>
            <div className={`stack-catogory-icon grid`}>
                {icon}
            </div>
            <div className="stack-name">{name}</div>
        </div>
    );
}

StackIcon.propTypes = {
    classes : PropTypes.string,
    name: PropTypes.string.isRequired,
    icon: PropTypes.element
}