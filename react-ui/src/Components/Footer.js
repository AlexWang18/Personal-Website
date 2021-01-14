import React, { useEffect, useState } from 'react';

import { getSOTD } from './services/serverServices'

const Footer = ({ data }) => {

  const networks = data.social.map(n =>
    <li key={n.name}><a href={n.url}><i className={n.className}></i></a></li>
  )

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
  return (
    <footer>

      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
          <div><a href={song.url} className="button btn spotify-btn"><i><img src={song.image} width="50" height="50"></img></i>Song of the day: {song.name}</a></div>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
