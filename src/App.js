import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import NewEvent from './pages/NewEvent';


function App() {
  return (
    <Router>
    <div className="App">
      <LandingPage />
      <HomePage />
      <NewEvent />
    </div>
    </Router>
  );
}

export default App;
