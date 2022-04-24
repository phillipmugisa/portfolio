import React from 'react';
import './App.css';

import {
  Routes ,
  Route
} from "react-router-dom";

import Header from './components/utils/header'
import Footer from './components/utils/footer'


// app component imports
import HomePage from './pages/homePage';

function App() {
  return (
    <React.Fragment>
      <Header />
        <Routes>
          <Route path={'/'} exact element={<HomePage />} />
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
