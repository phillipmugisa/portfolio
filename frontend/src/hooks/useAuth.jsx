// react
import { useContext } from 'react';

// context
import { AppContext } from './AppContext';

const useAuth = (url) => {

    const { setPostResponse, setLoginModalIsOpen, setSignupModalIsOpen, setHasTokens } = useContext(AppContext);

    const BACKEND_URL = "http://localhost:8000/api/";

    const makeRequest = async (data, headers) => {
        return await fetch(`${BACKEND_URL}${url}`, {
            method: "POST",
            headers: headers,
            mode: "cors",
            cache: "no-cache",
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }


    const signIn = async (data) => {
        const headers  = {
            'Content-Type' : 'application/json'
        }
        const response  = await makeRequest(data, headers);
        try {
            if (response.status === 405)
            {
                throw new Error("Please Submit Complete Data");
            }
            else if (response.status === 401)
            {
                throw new Error("Account Not Found. Username or Password is incorrect");
            }
            else if (response.status === 200)
            {
                const jsonResponse = await response.json();
                localStorage.setItem('access_token', jsonResponse.access)
                localStorage.setItem('refresh_token', jsonResponse.refresh)
                setPostResponse({data: {"messages" : {"alertType" : "success", "alertMsg" : "logged in successfully."}}});
                setTimeout(() => setPostResponse(null), 3000);
                setLoginModalIsOpen(false);
                setHasTokens(true)
            }
            else
            {
                throw new Error("An error occured. Please Try Again");
            }
        }
        catch(e)
        {
            setPostResponse({data: {"messages" : {"alertType" : "error", "alertMsg" : e}}});
            setTimeout(() => setPostResponse(null), 3000)
        }
    }

    const signUp = async (data) => {
        const headers  = {
            'Content-Type' : 'multipart/form-data'
        }
        const response  = await makeRequest(data, headers);
        try {
            if (response.status >= 200 && response.status <= 299)
            {
                setPostResponse({data: {"messages" : {"alertType" : "success", "alertMsg" : "Account created successfully. Please sign in"}}});
                setTimeout(() => setPostResponse(null), 3000);
                setSignupModalIsOpen(false);
                setLoginModalIsOpen(true);
                setHasTokens(true);
            }
            else
            {
                throw new Error("An error occured. Please Try Again");
            }
        }
        catch(e)
        {
            // setPostResponse({data: {"messages" : {"alertType" : "error", "alertMsg" : e}}});
            // setTimeout(() => setPostResponse(null), 3000)
        }
    }

    return {signIn, signUp};
}

export default useAuth;