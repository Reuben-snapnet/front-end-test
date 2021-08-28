import React, { useEffect, useState } from 'react'
import './App.css';
import EventDATA  from './components/events/Event'
import About from '../src/components/about/About'
import Header from '../src/components/header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
  
    <Router>
    <div className="App">
      <Header/>
      <Route
      exact path='/' render={ props =>(
        <>
        <EventDATA/>
        </>
      )} component={EventDATA}
      />
      
      <Route path ='/about' component={About}/>
    </div>
    </Router>
  );
}


export default App;
