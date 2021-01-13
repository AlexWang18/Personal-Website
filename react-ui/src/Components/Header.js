import React, { Component, useEffect, useState } from 'react';
import Particles from '../Proton/Particles'

import { getSpotify } from '../services/serverServices'

const Header = ({ data }) => {
   const [song, setSong] = useState(null)
   
   useEffect(() => {
      const songOTD = getSpotify()
      setSong(songOTD)
   }, [])

   var github = data.github;
   var name = data.name;
   var description = data.description;
   var networks = data.social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   })

   if(song === null){
      console.log(song)
      return <h1>Loading...</h1>
   }
   console.log(song)
   return (
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner">

               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h3>{description}.</h3>
                  <hr />
                  <ul className="social">
                     <a href={song.url} className="button btn spotify-btn"><i className="fa fa-book"></i>Song of the day</a>
                     <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
            <Particles bg={true} />
         </header>
   )
}

export default Header;
