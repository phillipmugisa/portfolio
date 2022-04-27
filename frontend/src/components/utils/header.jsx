import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaCog } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import ToggleButton from './toggleButton';
import AppButton from './appButton';

const Header = () => {

    const headerRef = useRef();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [settingIsOpen, setSettingIsOpen] = useState(false);

    const handleToggleSwitchChange = (onState) => {
        // redirect basing on state
        // console.log(onState)
    }

    useEffect(() => {

        window.addEventListener("scroll", function(){
            if  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                headerRef.current.classList.add('elevated')
            }
            else
            {
                headerRef.current.classList.remove('elevated')
            }
        }, false);
         

    }, [])

    return (
        <header ref={headerRef}>
            <ul className="container grid desktop">
                <li>
                    <Link to="/" className="btn tab active">Home</Link>
                </li>
                <li>
                    <Link to="/" className="btn tab">Projects</Link>
                </li>
                <li>
                    <Link to="/" className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-link">mugisathedev</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="btn tab">Blog</Link>
                </li>
                <li>
                    <Link to="/" className="btn hire tab bg-primary txt-white">Hire Me</Link>
                </li>
            </ul>
            <ul className="container-fluid flex mobile">
                <div className="md-tabs grid" onClick={() => setMobileMenuOpen(state => !state)}>
                    <li>
                        { mobileMenuOpen ? <MdClose /> : <FaBars />}
                    </li>
                </div>
                <Link to="/" className="md-tabs grid logo">
                    <li>
                        <div className="grid place-center logo">
                            <p className="logo-name btn tab logo-link">MtD</p>
                        </div>
                    </li>
                </Link>
                <div className="md-tabs grid" onClick={() => setSettingIsOpen(state => !state)}>
                    <li>
                        { settingIsOpen ? <MdClose /> : <FaCog />}
                    </li>
                </div>
            </ul>
            <div className={`mobile-menu-tabs grid ${ mobileMenuOpen ? "inView" : ""}`}>
                <Link to="/" className="menu-tabs grid active">
                    Home
                </Link>
                <Link to="/" className="menu-tabs grid">
                    Projects
                </Link>
                <Link to="/" className="menu-tabs grid">
                    Blog
                </Link>
                <Link to="/" className="menu-tabs grid">
                    Contact Us
                </Link>
                <Link to="/" className="menu-tabs grid hire bg-primary txt-white">
                    Hire Me
                </Link>
            </div>
            <div className={`mobile-settings grid ${settingIsOpen ? "inView" : ""}`}>
                <div className="settings-item grid language">
                    <form action="">
                        <label htmlFor="language-setter">
                            Location:
                        </label>
                        <select name="" id="language-setter">
                            <option value="English" selected >Uganda</option>
                            <option value="French" >France</option>
                        </select>
                    </form>
                </div>
                <div className="settings-item grid language">
                    <form action="">
                        <label htmlFor="language-setter">
                            Language:
                        </label>
                        <select name="" id="language-setter">
                            <option value="English" selected >English</option>
                            <option value="French" >French</option>
                        </select>
                    </form>
                </div>
                <div className="settings-item grid">                    
                    <ToggleButton
                        defaultOn="Vanilla JavaScript"
                        defaultOff="React"
                        onChange={handleToggleSwitchChange}
                    />
                </div>
                <div className="settings-cta grid">                    
                    <AppButton
                        classes="bg-white txt-secondary roundbr"
                        text = 'Login'
                        onClickUrl=''
                    />                
                    <AppButton
                        classes="bg-secondary txt-white roundbr"
                        text = 'Register'
                        onClickUrl=''
                    />
                </div>
            </div>
        </header>
    );
}
 
export default Header;
