import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch, Route} from 'react-router-dom';

//begin component imports
import Navigation from './components/Navigation';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Hero />
      </Router>
    </>
  );
}

export default App;
