import React from 'react';

import download from 'downloadjs'
import { getResume } from './services/serverServices'

const About = ({ data }) => {
   const name = data.name
   const profilepic = 'images/' + data.image // not routing correctly if i include the /images in resumedata
   const bio = data.bio
   const phone = data.phone
   const email = data.email


   return (
      <div className="about">
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Alex Wang pfp" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>

                     <div className="columns download">
                        <button className="button"
                           onClick={async () => {
                              getResume().then(file => {
                                 download(file, 'AW Resume')
                              })
                           }}>
                           <i className="fa fa-download"></i>
                              Download Resume
                        </button>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      </div>
   );
}


export default About;
