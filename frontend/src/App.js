import React, {useContext, useEffect} from 'react';
import './App.css';

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from './components/utils/header'
import Footer from './components/utils/footer'

// app component imports
import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectPage';
import BlogPage from './pages/blogPage';
import HirePage from './pages/hirePage';
import DesignSystem from './pages/designSystem';
import SingleProjectPage from './pages/singleProjectPage';
import SingleBlogPage from './pages/singleBlogPage';

// hooks and context
import {AppContext, AppContextProvider } from './hooks/AppContext';

function App() {

  const location = useLocation();

  const appRoutes = useContext(AppContext);
  
  useEffect(() => {
    // window.scrollTo({top:0, behavior: 'smooth'})
  },[location.pathname]);

  return (
    <React.Fragment>
      <AppContextProvider>
        <Header />
          <main className={`main-section`}>
            <Routes>
              <Route path={`${appRoutes.home}`} exact element={<HomePage />} />
              <Route path={appRoutes.projects} exact element={<ProjectsPage />} />
              <Route path={appRoutes.blogs} exact element={<BlogPage />} />
              <Route path={appRoutes.hire} exact element={<HirePage />} />
              <Route path={appRoutes.design} exact element={<DesignSystem />} />
              <Route path={`${appRoutes.projects}/:slug/:id`} exact element={<SingleProjectPage />} />
              <Route path={`${appRoutes.blogs}/:slug/:id`} exact element={<SingleBlogPage />} />
            </Routes>
          </main>
        <Footer />
      </AppContextProvider>
    </React.Fragment>
  );
}

export default App;
