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

    useEffect(() => {
        
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
                setPostResponse : setPostResponse
            }}
        >
            { props.children }
        </AppContext.Provider>
    );
}

