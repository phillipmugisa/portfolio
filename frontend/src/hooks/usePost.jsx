// react
import { useContext } from 'react';

// context
import { AppContext } from './AppContext';

const usePost = (url) => {

    const { setPostResponse, setLoginModalIsOpen, setHasTokens } = useContext(AppContext);

    const BACKEND_URL = "http://localhost:8000/api/";

    const makeRequest = async (data, passed_url) => {
        const _url = passed_url ? passed_url : url;

        return await fetch(`${BACKEND_URL}${_url}`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                Authorization: localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
            },
            mode: "cors",
            cache: "no-cache",
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }

    const callAPI = async (data, _url) => {
        let response;
        if (_url !== null && _url !== undefined)
        {
            response = await makeRequest(data, _url);
        }
        else
        {
            response = await makeRequest(data);
        }

        if (response.status >= 200 && response.status <= 299)
        {
            const jsonResponse = await response.json();
            setPostResponse({data: jsonResponse});
            setTimeout(() => setPostResponse(null), 3000);
            return jsonResponse;
        }
        else if (response.status === 401 || response.status === 405 || response.status === 403)
        {
            // if refresh token exists in localStorage, get new token
            if (localStorage.getItem('refresh_token'))
            {
                const _resp = await makeRequest({
                    "refresh": localStorage.getItem('refresh_token')
                }, 'token/refresh/')
                if (_resp.status === 200) {
                    const _jsonResponse = await _resp.json();
                    // reset access token
                    localStorage.setItem('access_token', _jsonResponse.access);
                    setHasTokens(true);
                    // remake request
                    callAPI(data);
                }
                else
                {
                    setPostResponse({data: {"messages" : {"alertType" : "error", "alertMsg" : "Please sign in to react to this post."}}});
                    setTimeout(() => setPostResponse(null), 3000);
                    localStorage.clear();
                    setHasTokens(false);
                    setLoginModalIsOpen(true);
                }
            }
            else
            {
                setPostResponse({data: {"messages" : {"alertType" : "error", "alertMsg" : "Please sign in to react to this post."}}});
                setTimeout(() => setPostResponse(null), 3000);
                setLoginModalIsOpen(true);
            }
        }
        else
        {
            setPostResponse({data: {"messages" : {"alertType" : "error", "alertMsg" : "An error occured. Please Try Again "}}});
            setTimeout(() => setPostResponse(null), 3000);
        }
    }

    return callAPI;
}

export default usePost;