import React from 'react';

import PageStarter from '../components/pageStarter'
import About from '../components/About';
import StacksUsed from '../components/StacksUsed';
import Projects from '../components/projects'

function HomePage() {
    return (
        <React.Fragment>
            <PageStarter />
            <About />
            <Projects />
            <StacksUsed />
        </React.Fragment>
    );
}

export default HomePage;