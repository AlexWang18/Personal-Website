import React from 'react';

const About = ({data}) => {
   const name = data.name
   const profilepic = "images/"+"2020RaccoonCreek-0082.jpeg"
   const bio = data.bio
   const phone = data.phone
   const email = data.email
   const resumeDownload = data.resumedownload

   return (
      <div className="about">
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Alex Wang profile" />
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
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      </div>
   );
}


export default About;
