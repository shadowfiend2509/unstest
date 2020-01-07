import React from 'react';
import Home from './containers/Home/Home';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

export default () => {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}