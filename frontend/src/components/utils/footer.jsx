import React from "react";

import { 
    FaGithub, FaInstagram, FaLinkedinIn,
    FaPhoneAlt, FaMapMarkedAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
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
                            <a href="" className="icon">
                                <FaGithub />
                            </a>
                            <a href="" className="icon">
                                <FaInstagram />
                            </a>
                            <a href="" className="icon">
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
                            <a href="" className="footer-part-link">Django (10)</a>
                            <a href="" className="footer-part-link">Postgres (10)</a>
                            <a href="" className="footer-part-link">React (10)</a>
                            <a href="" className="footer-part-link">Figma (10)</a>
                            <a href="" className="footer-part-link">Adobe (10)</a>
                            <a href="" className="footer-part-link">Vanilla JavaScript (10)</a>
                        </div>
                    </div>
                </div>
                <div className="footer-part grid">
                    <h5 className="footer-part-heading">
                        Site Map
                    </h5>
                    <div className="footer-part-body grid">
                        <div className="footer-part-links grid site-map">
                            <a href="" className="footer-part-link">Home</a>
                            <a href="" className="footer-part-link">Projects</a>
                            <a href="" className="footer-part-link">Blog</a>
                            <a href="" className="footer-part-link">Privacy Policy</a>
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
                            <input type="submit" value="Subscribe" className="btn bg-primary txt-white" />
                        </form>
                    </div>
                </div>
            </div>
            <p className="copyright">
                <span>Copyright &copy; {(new Date().getFullYear())}, All rights reserved. Property of mugisathedev.net</span>
            </p>
        </footer>
    );
}
 
export default Footer;