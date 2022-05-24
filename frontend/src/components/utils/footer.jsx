import React, { useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { 
    FaGithub, FaInstagram, FaLinkedinIn,
    FaPhoneAlt, FaMapMarkedAlt, FaArrowUp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import AppButton from './appButton';
import CommentModel from './models/commentModel';

import { AppContext } from '../../hooks/AppContext';

const Footer = () => {

    const toTopElem = useRef(null);
    const {appRoutes} = useContext(AppContext);

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
            <div className="toTop grid" ref={toTopElem} onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>                
                <AppButton
                    classes="bg-secondary txt-white"
                    onClickUrl=''
                >
                    <FaArrowUp />
                </AppButton>
            </div>
            <CommentModel />
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
                                <div className="contact-item flex">
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
                                <NavLink to="" className="icon">
                                    <FaGithub />
                                </NavLink>
                                <NavLink to="" className="icon">
                                    <FaInstagram />
                                </NavLink>
                                <NavLink to="" className="icon">
                                    <FaLinkedinIn />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer-part grid">
                        <h5 className="footer-part-heading">
                            Related Links
                        </h5>
                        <div className="footer-part-body grid">
                            <div className="footer-part-links grid">
                                <NavLink to="" className="footer-part-link">Django (10)</NavLink>
                                <NavLink to="" className="footer-part-link">Postgres (10)</NavLink>
                                <NavLink to="" className="footer-part-link">React (10)</NavLink>
                                <NavLink to="" className="footer-part-link">Figma (10)</NavLink>
                                <NavLink to="" className="footer-part-link">Adobe (10)</NavLink>
                                <NavLink to="" className="footer-part-link">Vanilla JavaScript (10)</NavLink>
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
                            <form action="">
                                <input type="email" name="" id="name_field" placeholder="Email..." />
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