import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import AppButton from "./utils/appButton";
import ToggleButton from "./utils/toggleButton";

const PageStarter = () => {

    const handleToggleSwitchChange = (onState) => {
        // redirect basing on state
        // console.log(onState)
    }

    return (
        <section className="page-starter container grid mg-block-2 gap-3 gap-md-2">
            <div className="left">
                <div className="page-starter-text grid gap-md-1">                
                    {/* <h1 className="page-heading">I am Mugisa Phillip</h1> */}
                    <TypeWriter
                        text1="I am Mugisa Phillip"
                        text2="I am a full stack web developer"
                        classes="page-heading"
                        speed={1}
                    />
                    <h3 className="page-sub-heading">Offering solutions to all your Software needs.</h3>
                </div>
                <div className="tags gap-sm flex">
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'UI/UX Design'
                        onClickUrl=''
                    />
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'Web Development'
                        onClickUrl=''
                    />
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'Mobile App Development'
                        onClickUrl=''
                    />
                </div>
                <AppButton
                    classes="bg-primary txt-white cta roundbr"
                    text = 'Hire Me'
                    onClickUrl=''
                />
            </div>
            <div className="right">
                <ToggleButton
                    defaultOn="Vanilla JavaScript"
                    defaultOff="React"
                    onChange={handleToggleSwitchChange}
                />
            </div>
            <div className="bottom">
                <div className="pre-resume grid gap-1">
                    <div className="resume-card flex">
                        <span className="card-count">4</span>
                        <span className="card-discription">Years of Experience</span>
                    </div>
                    <div className="resume-card flex">
                        <span className="card-count">10+</span>
                        <span className="card-discription">Projects worked on.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default PageStarter;

function TypeWriter({text1, text2, classes, speed}) {

    const typewriter = useRef(null);
    // const [isInView, setIsInView] = useState(true);
    
    const runAnimations = () => {
        /*
        // let styles = getComputedStyle(typewriter.current);
        // let typewriterSpeed = styles.getPropertyValue('--typewriterSpeed');
        // let typewriterCharacters = styles.getPropertyValue('--typewriterCharacters');
        typewriter.current.style.setProperty('--typewriterSpeed', '5s');

        let text1length = text1.length;
        let text2length = text2.length;

        typewriter.current.textContent = text1;
        typewriter.current.classList.add('type')
        typewriter.current.style.setProperty('--typewriterCharacters', text1length);

        typewriter.current.addEventListener('animationend', function(ev) {
            if (ev.animationName === 'typewriter' && typewriter.current.textContent === text1 ) {
                setTimeout(() => {
                    typewriter.current.classList.remove('type');
                    typewriter.current.classList.add('backspace');

                    typewriter.current.addEventListener('animationend', function(ev) {
                        if (ev.animationName === 'backspace') {
                            setTimeout(() => {
                                typewriter.current.classList.remove('backspace');
                                typewriter.current.classList.add('type');
                                typewriter.current.textContent = text2;
                                typewriter.current.style.setProperty('--typewriterCharacters', text2length);
                            }, 1000)
                        }
                    })

                }, 1000);
            }
        })
        */
    };

    useEffect(() => {
        runAnimations();

        // scale out heading on scroll
        // let lastScrollTop = 0;
        // window.addEventListener("scroll", function(){
        //     let st = window.pageYOffset || document.documentElement.scrollTop;
        //     // defaults for desktop 
        //     // let UpperLimitfontSize = "max(2.4rem, 4rem)";
        //     // let LowerLimitfontSize = "min(2.4rem, 4rem)";

        //     // if(window.innerWidth < 500)
        //     // {
        //     //     // mobile
        //     //     UpperLimitfontSize = "max(2.25rem, 2.8rem)";
        //     //     LowerLimitfontSize = "min(2.25rem, 2.8rem)";
        //     // }
        //     // else if (window.innerWidth < 1024)
        //     // {
        //     //     // tablets and smaller screens
        //     //     UpperLimitfontSize = "max(2.4rem, 3.5rem)";
        //     //     LowerLimitfontSize = "min(2.4rem, 3.5rem)";
        //     // }

        //     if (isInView) {
        //         // if (st > lastScrollTop){
        //         //     // downscroll code
        //         //     // if element in DOM
        //         //     typewriter.current.style.fontSize = LowerLimitfontSize;
        //         // } else {
        //         //     // upscroll code
        //         //     typewriter.current.style.fontSize = UpperLimitfontSize;
        //         // }                
        //     }
            
        //     lastScrollTop = st <= 0 ? 0 : st;
        // }, false);
        // const observer = new IntersectionObserver((entries, observer) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             setIsInView(true)
        //         }
        //         else
        //         {
        //             setIsInView(false)
        //         }
        //     })
        // })
        // observer.observe(typewriter.current);

    }, [])

    return (
        <h4 className={`typewriter ${classes}`} ref={typewriter}>
            Full Stack Web Developor
        </h4>
    );
}

TypeWriter.propTypes = {
    text1 : PropTypes.string.isRequired,
    text2 : PropTypes.string.isRequired,
    classes : PropTypes.string.isRequired,
    speed : PropTypes.number,
}
