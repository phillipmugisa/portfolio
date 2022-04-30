import React from 'react';

import PageStarter from '../components/pageStarter'
import About from '../components/About';
import StacksUsed from '../components/StacksUsed';
import Projects from '../components/projects'
import Blogs from '../components/Blogs';
import ScrapperNews from '../components/scrapperNews';

function HomePage() {
    return (
        <React.Fragment>
            <PageStarter />
            <About />
            <Projects url={""}/>
            <Blogs urls={""} isHorizontal={true}/>
            <StacksUsed />
            <ScrapperNews />
        </React.Fragment>
    );
}

export default HomePage;