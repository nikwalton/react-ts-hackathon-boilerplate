import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch, Route} from 'react-router-dom';

//begin component imports
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Presenters from './components/Presenters'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Team from './components/Team'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Hero />
        <About />
        <Schedule />
        <Presenters />
        <Sponsors />
        <FAQ />
        <Team />
      </Router>
    </>
  );
}

export default App
