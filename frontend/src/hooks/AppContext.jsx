import React, { useState, useEffect, createContext } from "react";

// app routes
const routes = {
    home : "/",
    projects : "/projects",
    blogs: "/blogs",
    hire: "/hire",
    admin: "/admin",
    design: "/design"
}


export const AppContext = createContext(routes);

export const AppContextProvider = (props) => {
    
    const [postResponse, setPostResponse] = useState(null)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [settingsMobalOpen, setSettingsMobalOpen] = useState(false)
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [signupModalIsOpen, setSignupModalIsOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [settingIsOpen, setSettingIsOpen] = useState(false);
    const [hasTokens, setHasTokens] = useState(false);

    const bodyElem = document.querySelector('body');

    const toggleBodyScrollability = (state) => {
        if (state === true)
        {
            bodyElem.classList.add("on-scroll");
        }
        else
        {
            bodyElem.classList.remove("on-scroll");
        }
    }

    const fadeBackground = (state) => {
        const mainElem = document.querySelector('.main-section');        
        if (state !== true)
        {
            mainElem.classList.remove("fade")
        }
        else
        {
            mainElem.classList.add("fade")
        }
    }

    useEffect(() => {

        if (localStorage.getItem('refresh_token'))
        {
            setHasTokens(true);
        }
        
    }, [postResponse, mobileNavOpen, settingsMobalOpen])

    return (
        <AppContext.Provider
            value={{
                appRoutes: routes,
                mobileNavOpen : mobileNavOpen,
                setMobileNavOpen : setMobileNavOpen,
                settingsMobalOpen : settingsMobalOpen,                
                setSettingsMobalOpen : setSettingsMobalOpen,
                postResponse : postResponse,
                setPostResponse : setPostResponse,
                loginModalIsOpen : loginModalIsOpen,
                setLoginModalIsOpen : setLoginModalIsOpen,
                signupModalIsOpen : signupModalIsOpen,
                setSignupModalIsOpen : setSignupModalIsOpen,
                toggleBodyScrollability : toggleBodyScrollability,
                fadeBackground : fadeBackground,
                mobileMenuOpen : mobileMenuOpen,
                setMobileMenuOpen : setMobileMenuOpen,
                settingIsOpen : settingIsOpen,
                setSettingIsOpen : setSettingIsOpen,
                hasTokens : hasTokens,
                setHasTokens : setHasTokens,
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

