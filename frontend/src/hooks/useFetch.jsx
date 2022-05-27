import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: null, error: {isError: false, error_code : null}
    });

    const BACKEND_URL = "http://localhost:8000/api/"

    const fetchData = async () => {
        const response = await fetch(`${BACKEND_URL}${url}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
        });
        if (response.status >= 200 && response.status <= 299)
        {
            const jsonResponse = await response.json();
            setState({data: jsonResponse, error: {isError: false, error_code : null}});
        }
        else
        {
            setState({data: null, error: {isError: false, error_code : response.status}});
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    return state;
}

export default useFetch;