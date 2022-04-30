import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

import { FaBars, FaCog } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import ToggleButton from './toggleButton';
import AppButton from './appButton';

import { AppContext } from '../../hooks/AppContext';

const Header = () => {

    const headerRef = useRef();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [settingIsOpen, setSettingIsOpen] = useState(false);
    
    const bodyElem = document.querySelector('body');

    const {appRoutes} = useContext(AppContext);

    const handleToggleSwitchChange = (onState) => {
        // redirect basing on state
        // console.log(onState)
    }

    const toggleBodyScrollability = () => {
        if (bodyElem.classList.contains("on-scroll"))
        {
            bodyElem.classList.remove("on-scroll")
        }
        else
        {
            bodyElem.classList.add("on-scroll")
        }
    }

    const openMobileNav = () => {
        toggleBodyScrollability();
        setMobileMenuOpen(state => !state);
    }

    const openSettingMobal = () => {
        const mainElem = document.querySelector('.main-section');

        
        if (mainElem.classList.contains("fade"))
        {
            mainElem.classList.remove("fade")
        }
        else
        {
            mainElem.classList.add("fade")
        }

        toggleBodyScrollability();
        setSettingIsOpen(state => !state);
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
                    <NavLink to={appRoutes.home} className={`btn tab`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.projects} className={`btn tab`}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.home} className="logo">
                        <div className="grid place-center logo">
                            <div id="logo"></div>
                            <p className="logo-name btn tab logo-NavLink">mugisathedev</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.blogs} className={`btn tab`}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={appRoutes.hire} className="btn hire tab bg-primary txt-white">Hire Me</NavLink>
                </li>
            </ul>
            <ul className="container-fluid flex mobile">
                <div className="md-tabs grid" onClick={() => openMobileNav()}>
                    <li>
                        { mobileMenuOpen ? <MdClose /> : <FaBars />}
                    </li>
                </div>
                <NavLink to={appRoutes.home} className="md-tabs grid logo">
                    <li>
                        <div className="grid place-center logo">
                            <p className="logo-name btn tab logo-NavLink">MtD</p>
                        </div>
                    </li>
                </NavLink>
                <div className="md-tabs grid" onClick={() => openSettingMobal()}>
                    <li>
                        { settingIsOpen ? <MdClose /> : <FaCog />}
                    </li>
                </div>
            </ul>
            <div className={`mobile-menu-tabs grid ${ mobileMenuOpen ? "inView" : ""}`}>
                <NavLink to={appRoutes.home} onClick={() => openMobileNav()} className="menu-tabs grid">
                    Home
                </NavLink>
                <NavLink to={appRoutes.projects} onClick={() => openMobileNav()} className="menu-tabs grid">
                    Projects
                </NavLink>
                <NavLink to={appRoutes.blogs} onClick={() => openMobileNav()} className="menu-tabs grid">
                    Blog
                </NavLink>
                <NavLink to={appRoutes.home} onClick={() => openMobileNav()} className="menu-tabs grid">
                    Contact Us
                </NavLink>
                <NavLink to={appRoutes.hire} onClick={() => openMobileNav()} className="menu-tabs grid hire bg-primary txt-white">
                    Hire Me
                </NavLink>
            </div>
            <div className={`mobile-settings grid ${settingIsOpen ? "inView" : ""}`}>
                <div className="settings-item grid language">
                    <form action="">
                        <label htmlFor="location-setter">
                            Location:
                        </label>
                        <select name="" id="location-setter" defaultValue={"Uganda"}>
                            <option value="Uganda" >Uganda</option>
                            <option value="France" >France</option>
                        </select>
                    </form>
                </div>
                <div className="settings-item grid language">
                    <form action="">
                        <label htmlFor="language-setter">
                            Language:
                        </label>
                        <select name="" id="language-setter" defaultValue={"English"}>
                            <option value="English" >English</option>
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
