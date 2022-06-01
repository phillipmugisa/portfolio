// react
import React, { useRef, useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

// icons
import { 
    FaGithub, FaInstagram, FaLinkedinIn,
    FaPhoneAlt, FaMapMarkedAlt, FaArrowUp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// components
import AppButton from './appButton';
import CommentModel from './models/commentModel';
import { AlertWidget } from './widgets';
import { LoginModel,SignUpModel } from './models/authModel';

// custom hooks
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';

// context
import { AppContext } from '../../hooks/AppContext';


const Footer = () => {

    const [subscriberEmail, setSubscriberEmail] = useState(null);

    const toTopElem = useRef(null);
    const subscriber_form = useRef(null)
    const {appRoutes, postResponse, loginModalIsOpen, signupModalIsOpen, setLoginModalIsOpen} = useContext(AppContext);

    const fetchState = useFetch('stackstats/');
    const postHandler = usePost('subscribe/');

    const subscribeHandler = (e) => {
        e.preventDefault()
        if (subscriberEmail !== null && subscriberEmail !== "")
        {
            let data = {"email" : subscriberEmail};
            postHandler(data);
            setSubscriberEmail(null);
            subscriber_form.current.reset();
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", function() {
            if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                toTopElem.current.classList.add('inView')
            }
            else
            {
                if (toTopElem.current.classList.contains('inView'))
                {
                    toTopElem.current.classList.remove('inView')
                }
            }

            if  ((document.body.offsetHeight - document.body.scrollTop) <= 1200 || (document.body.offsetHeight - document.documentElement.scrollTop) <= 1200) {
                toTopElem.current.childNodes[0].classList.add('infooter')
                
            }
            else
            {
                if (toTopElem.current.childNodes[0].classList.contains('infooter'))
                {
                    toTopElem.current.childNodes[0].classList.remove('infooter')
                }
            }
        });
    }, [])

    return (
        <>
            {postResponse && <AlertWidget {...postResponse.data.messages}/>}
            <div className="toTop grid" ref={toTopElem} onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>                
                <AppButton
                    classes="bg-secondary txt-white"
                    onClickUrl=''
                >
                    <FaArrowUp />
                </AppButton>
            </div>
            <div className="page-loader">
                <div className="loader">
                    <span>M</span>
                    <span>t</span>
                    <span>D</span>
                </div>
            </div>
            <CommentModel />
            {loginModalIsOpen && <LoginModel />}
            {signupModalIsOpen && <SignUpModel />}
            <footer className="grid bg-secondary">
                <div className="container grid">
                    <div className="footer-part grid">
                        <h5 className="footer-part-heading">
                            Contact us
                        </h5>
                        <div className="footer-part-body grid">
                            <div className="contact-infor grid">
                                <div className="contact-item flex">
                                    <span className="icon">
                                        <FaPhoneAlt />
                                    </span>
                                    <p>+256 782 047 612</p>
                                </div>
                                <div onClick={()=>setLoginModalIsOpen(true)} className="contact-item flex">
                                    <span className="icon">
                                        <MdEmail />
                                    </span>
                                    <p>phillipmugisa4@gmail.com</p>
                                </div>
                                <div className="contact-item flex">
                                    <span className="icon">
                                        <FaMapMarkedAlt />
                                    </span>
                                    <p>Kampala, Uganda</p>
                                </div>
                            </div>
                            <div className="social-icons flex">
                                <a
                                    href="https://www.github.com/phillipmugisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.github.com/phillipmugisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.github.com/phillipmugisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-part grid">
                        <h5 className="footer-part-heading">
                            Related Links
                        </h5>
                        <div className="footer-part-body grid">
                            <div className="footer-part-links grid">
                                {
                                    fetchState.data
                                    &&
                                    Object.keys(fetchState.data).map(key => {
                                        return (
                                            <NavLink
                                                key={key}
                                                to={`${appRoutes.projects}/?search=${key}`}
                                                className="footer-part-link"
                                            >
                                                {key.slice(0,10)} ({fetchState.data[key]})
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="footer-part grid">
                        <h5 className="footer-part-heading">
                            Site Map
                        </h5>
                        <div className="footer-part-body grid">
                            <div className="footer-part-links grid site-map">
                                <NavLink to={appRoutes.home} className="footer-part-link">Home</NavLink>
                                <NavLink to={appRoutes.projects} className="footer-part-link">Projects</NavLink>
                                <NavLink to={appRoutes.blogs} className="footer-part-link">Blog</NavLink>
                                <NavLink to={appRoutes.home} className="footer-part-link">Privacy Policy</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer-part grid newsletter">
                        <h5 className="footer-part-heading">
                            Newsletter
                        </h5>
                        <div className="footer-part-body grid">
                            <p className="footer-part-intro">Get timely updates right in your inbox.</p>
                            <form onSubmit={subscribeHandler} ref={subscriber_form}>
                                <input type="email" id="email_field" placeholder="Email..." required onChangeCapture={(e) => setSubscriberEmail(e.target.value)}/>
                                <input type="submit" value="Subscribe" className="btn bg-accent txt-white"/>
                            </form>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    <span>Copyright &copy; {(new Date().getFullYear())}, All rights reserved. Property of mugisathedev.net</span>
                </p>
            </footer>
        </>
    );
}
 
export default Footer;