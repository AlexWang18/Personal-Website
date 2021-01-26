import React, { useState, useEffect } from 'react';

import { getSOTD } from './services/serverServices'
import SpotifyPlayer from 'react-spotify-player'

const Footer = ({ data }) => {

  const [song, setSong] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      const songOTD = await getSOTD()
      setSong(songOTD)
    }
    fetch()
  }, [])

  if (song === null) {
    return <h1>Loading...</h1>
  }

  const networks = data.social.map(n =>
    <li key={n.name}><a target="_blank" rel="noopener noreferrer" href={n.url}><i className={n.className}></i></a></li>
  )
  return (
    <footer>

      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
        </div>
        <span className="spotifywidget" style={{paddingInline: "", display: "block", }}><SpotifyPlayer
              uri={song.url}
              size="compact"
              view="coverart"
              theme="black"
            /></span>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
