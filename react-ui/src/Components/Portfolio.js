import React, { Component } from 'react';

const Project = ({ p }) => {
  var projectImage = 'images/portfolio/' + p.image;
  return (
    <div key={p.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={p.url} title={p.title}>
          <img alt={p.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{p.title}</h5>
              <p>{p.category}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(
        (project) => <Project p={project} />
      )
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My work thus far.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
