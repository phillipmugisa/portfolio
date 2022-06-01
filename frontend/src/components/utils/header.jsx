import React, { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

import { FaBars, FaCog } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import ToggleButton from './toggleButton';

import { AppContext } from '../../hooks/AppContext';

const Header = () => {

    const headerRef = useRef();

    const {appRoutes, mobileMenuOpen, setMobileMenuOpen, settingIsOpen, setSettingIsOpen} = useContext(AppContext);

    // const handleToggleSwitchChange = (onState) => {
    //     // redirect basing on state
    //     // console.log(onState)
    // }

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
        <header ref={headerRef} className="grid">
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
                            {/* <div id="logo"></div> */}
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
            <div className="desktop-settings" onClick={() => setSettingIsOpen(state => !state)}>
                { settingIsOpen ? <MdClose /> : <FaCog />}
            </div>
            <ul className="container-fluid flex mobile">
                <div className="md-tabs grid" onClick={() => setSettingIsOpen(state => !state)}>
                    <li>
                        { settingIsOpen ? <MdClose /> : <FaCog />}
                    </li>
                </div>
                <NavLink to={appRoutes.home} className="md-tabs grid logo">
                    <li>
                        <div className="grid place-center logo">
                            <p className="logo-name btn tab logo-NavLink">MtD</p>
                        </div>
                    </li>
                </NavLink>
                <div className="md-tabs grid" onClick={() => setMobileMenuOpen(state => !state)}>
                    <li>
                        { mobileMenuOpen ? <MdClose /> : <FaBars />}
                    </li>
                </div>
            </ul>
            {mobileMenuOpen && <MobileTabs />}
            {settingIsOpen && <AppSettings />
            }
        </header>
    );
}

const AppSettings = () => {

    const {toggleBodyScrollability, fadeBackground, setLoginModalIsOpen, setSignupModalIsOpen, mobileMenuOpen, setMobileMenuOpen, hasTokens, setHasTokens} = useContext(AppContext);

    useEffect(() => {
        // check if menu is open and close it
        if (mobileMenuOpen)
        {
            setMobileMenuOpen(false);
        }
        toggleBodyScrollability(true);
        fadeBackground(true);

        return () => {
            toggleBodyScrollability(false);
            fadeBackground(false);
        }
    }, [])

    return (
        <div className={`mobile-settings grid inView`}>
            <div className="settings-item grid">             
                <ToggleButton
                    defaultOn="React"
                    defaultOff="Vanilla Js"
                    onChange={()=>{}}
                />
            </div>
            <div className="divider"></div>
            <div className="settings-item grid language">
                <form action="">
                    <label htmlFor="location-setter">
                        Location:
                    </label>
                    <select name="" id="location-setter" defaultValue={"Uganda"}>
                        <option value="Uganda" >Uganda</option>
                        {/* <option value="France" >France</option> */}
                    </select>
                </form>
            </div>
            {/* <div className="settings-item grid language">
                <form action="">
                    <label htmlFor="language-setter">
                        Language:
                    </label>
                    <select name="" id="language-setter" defaultValue={"English"}>
                        <option value="English" >English</option>
                        <option value="French" >French</option>
                    </select>
                </form>
            </div> */}
            {
                !hasTokens
                &&
                <div className="settings-cta grid">                    
                    <button
                        className="btn bg-white txt-secondary roundbr"
                        onClick={() => setLoginModalIsOpen(true)}
                    >
                        Login
                    </button>
                    <button
                        className="btn bg-secondary txt-white roundbr"
                        onClick={() => setSignupModalIsOpen(true)}
                    >
                        Register
                    </button>
                </div>
            }
            {
                hasTokens
                &&
                <div className="settings-cta grid" style={{'placeItems':'center', 'gridTemplateColumns':'1fr'}}>
                    <button
                        className="btn bg-secondary txt-white roundbr" style={{'justifySelf':'center', 'gridTemplateColumns':'1fr'}}
                        onClick={() => {localStorage.clear(); setHasTokens(false)}}
                    >
                        Log out
                    </button>
                </div>
            }
        </div>
    )
}

const MobileTabs = () => {

    const {appRoutes, toggleBodyScrollability, fadeBackground, setMobileMenuOpen, settingIsOpen, setSettingIsOpen} = useContext(AppContext);

    useEffect(() => {
        // check if menu is open and close it
        if (settingIsOpen)
        {
            setSettingIsOpen(false);
        }
        toggleBodyScrollability(true);
        fadeBackground(true);

        return () => {
            toggleBodyScrollability(false);
            fadeBackground(false);
        }
    }, [])

    return (
        <div className={`mobile-menu-tabs grid inView`}>
            <NavLink to={appRoutes.home} onClick={() => setMobileMenuOpen(false)} className="menu-tabs grid">
                Home
            </NavLink>
            <NavLink to={appRoutes.projects} onClick={() => setMobileMenuOpen(false)} className="menu-tabs grid">
                Projects
            </NavLink>
            <NavLink to={appRoutes.blogs} onClick={() => setMobileMenuOpen(false)} className="menu-tabs grid">
                Blog
            </NavLink>
            {/* <NavLink to={appRoutes.home} onClick={() => setMobileMenuOpen(false)} className="menu-tabs grid">
                Contact Us
            </NavLink> */}
            <NavLink to={appRoutes.hire} onClick={() => setMobileMenuOpen(false)} className="menu-tabs grid hire bg-primary txt-white">
                Hire Me
            </NavLink>
        </div>
    )
}
 
export default Header;
