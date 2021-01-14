import React from 'react';
import Particles from './Proton/Particles'

const Header = ({ data }) => {

   const name = data.name;
   const github = data.github;
   const twitter = data.twitter;

   const description = data.description;
   
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
                     <span> <a href = {twitter} className="button btn twitter-btn"><i className="fa fa-twitter"></i>Twitter</a> </span>
                     <li> <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a> </li>
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
