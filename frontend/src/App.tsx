import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch, Route} from 'react-router-dom';

//begin component imports
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Router>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
