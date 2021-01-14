import React from 'react';

const Footer = ({ data }) => {

  const networks = data.social.map(n =>
    <li key={n.name}><a href={n.url}><i className={n.className}></i></a></li>
  )
  return (
    <footer>

      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
       

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
