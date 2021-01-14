import React from 'react';

const Resume = ({ data }) => {

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const skillmessage = data.skillmessage;
  //refactor
  const education = data.education.map((e) =>
    <div key={e.school}><h3>{e.school}</h3>
      <p className="info">{e.degree} <span>&bull;</span><em className="date">{e.graduated}</em></p>
      <p>{e.description}</p>
    </div>
  )
  const work = data.work.map((w) =>
    <div key={w.company}><h3>{w.company}</h3>
      <p className="info">{w.title}<span>&bull;</span> <em className="date">{w.years}</em></p>
      <p>{w.description}</p>
    </div>
  )
  const skills = data.skills.map((s) => {
    var className = 'bar-expand ' + s.name.toLowerCase();
    return (
      <li key={s.name}>
        <span style={{ width: s.level, backgroundColor: getRandomColor() }} className={className}></span><em>{s.name}</em> {/* in line styling */}
      </li>
    )
  })
  return (
    <section id="resume">

      <div className="row eduction">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>


      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
