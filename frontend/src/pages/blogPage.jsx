import React, { useReducer } from "react";

import Blogs from '../components/Blogs';

// const reducer = (state, action) =>
// {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

const BlogPage = () => {

    // const [{url}, dispatch] = useReducer(reducer, {url : ""});

    return (
        <>
            <Blogs url={url} isHorizontal={false} />
        </>
    );
}
 
export default BlogPage;