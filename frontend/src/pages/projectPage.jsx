import React, { useState } from "react";

import {} from 'react-router-dom';

import Projects from '../components/projects';

const ProjectsPage = () => {

    const [url, setState] = useState("");

    return (
        <>
            <Projects url={url}/>
        </>
    );
}
 
export default ProjectsPage;