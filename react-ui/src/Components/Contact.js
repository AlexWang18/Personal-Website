import React, { useState } from 'react';

import { contactSubmit } from './services/serverServices'
import { getLatest } from './services/twitterServices'

const Contact = ({ data }) => {
   //if(data) getLatest()
   const name = data.name;
   const city = data.city;
   const state = data.state;
   const phone = data.phone;
   const email = data.email;
   const contactMessage = data.contactmessage; 

   const [newName, setName] = useState('')
   const [newEmail, setEmail] = useState('')
   const [newMessage, setMessage] = useState('')

   const resetForm = () => {
      setName('')
      setEmail('')
      setMessage('')
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const userData = {
         name: newName,
         email: newEmail,
         message: newMessage
      }

      contactSubmit(userData)
         .then(data => {
            console.log('success submitting data', data);
            resetForm()
         })
   }

   const handleNameChange = (event) => {
      setName(event.target.value)
   }
   const handleEmailChange = (event) => {
      //if matches regex
      setEmail(event.target.value)
   }
   const handleMessageChange = (event) => {
      setMessage(event.target.value)
   }

   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

               <p className="lead">{contactMessage}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contact" onSubmit={handleSubmit}>
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleNameChange} />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleEmailChange} />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleMessageChange} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error with submitting the form</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Contact Info</h4>
                  <p className="address">
                     {name} 
                     <br/>
                     {email}
                     <br/>
                     {city}, {state} <br />
                     <span>{phone}</span>
                  </p>
               </div>
               <div>
               <img src= "images/snowbody.jpg" alt = "closing picture" width = "200" height = "200"></img>
               </div>
               {/*  
               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                           filler tweets
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                           use twitter api here in frontend should suffice
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
               </div> */}
              {/* <div><img src= "public/images/raven.JPG" alt = "closing picture"> </img> </div>  */}
            </aside>
         </div>
      </section>
   )
}

export default Contact;
