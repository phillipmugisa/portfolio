// react
import { useContext } from 'react';

// context
import { AppContext } from './AppContext';

const usePost = (url) => {

    const { setPostResponse } = useContext(AppContext);

    const BACKEND_URL = "http://localhost:8000/api/"

    const callAPI = async (data) => {
        const response = await fetch(`${BACKEND_URL}${url}`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            mode: "cors",
            cache: "no-cache",
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        const jsonResponse = await response.json();
        setPostResponse({data: jsonResponse});
        setTimeout(() => setPostResponse(null), 3000)
    }

    return callAPI;
}

export default usePost;