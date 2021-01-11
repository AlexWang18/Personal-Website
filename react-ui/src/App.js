import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'

import Home from './components/Home'
import {Body} from './components/Links/AboutMe'
import Portfolio from './components/Links/Portfolio'
import Contact from './components/Links/Contact'
import NavBar from './components/NavBar'

function App() {
  //states
  return (
    <Router>
    <h2>alex wang</h2>
      <div>
        <nav>
          <NavBar />
        </nav>
      </div>
      <Route name = "home" exact path = "/" component = {Home}/>
      <Route name = "About Me" exact path = "/aboutme" component = {Body}/>
      <Route name = "Portfolio" exact path = "/portfolio" component = {Portfolio} />
      <Route home = "Contact" exact path = "/contact" component = {Contact} />
      {/* <Details /> */}
    </Router>
  )
}

export default App;
