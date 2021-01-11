import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="headerbuttons"> 
        {/* should i wrap this is an unordered list? how can i restyle lists */}
            <button><Link to = "/">Home</Link></button>
            <button><Link to="/aboutme">About Me</Link></button>
            <button><Link to="/portfolio">Portfolio</Link></button>
            <button><Link to="/gallery">Gallery</Link></button>
            <button><Link to="/contact">Contact</Link></button>

        </header>
    )
}

export default NavBar