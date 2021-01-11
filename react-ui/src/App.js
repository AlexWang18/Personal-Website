import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

import Details from './components/Details'
import {Body} from './components/Links/AboutMe'
import Portfolio from './components/Links/Portfolio'
import NavBar from './components/NavBar'

function App() {
  //states
  return (
    <Router>
    <h2>Alex Wang</h2>
      <div>
        <nav>
          <NavBar />
        </nav>
      </div>
      <Route name = "home" exact path = "/" component = {Details}/>
      <Route name = "About Me" exact path = "/aboutme" component = {Body}/>
      <Route name = "Portfolio" exact path = "/portfolio" component = {Portfolio} />
      {/* <Details /> */}
    </Router>
  )
}

export default App;
