import React, { useState, createContext } from "react";

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
    
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [settingsMobalOpen, setSettingsMobalOpen] = useState(false)

    return (
        <AppContext.Provider
            value={{
                appRoutes: routes,
                mobileNavOpen : mobileNavOpen,
                setMobileNavOpen : setMobileNavOpen,
                settingsMobalOpen : settingsMobalOpen,                
                setSettingsMobalOpen : setSettingsMobalOpen
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

