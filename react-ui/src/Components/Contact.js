import React, { useState } from 'react';

import { contactSubmit } from './services/serverServices'

const Contact = ({ data }) => {

   const name = data.name;
   const city = data.city;
   const state = data.state;
   const phone = data.phone;
   const email = data.email;
   const contactMessage = data.contactmessage;
   const pic = 'images/' + data.endingpic

   const [newName, setName] = useState('')
   const [newEmail, setEmail] = useState('')
   const [newSubject, setSubject] = useState('')
   const [newMessage, setMessage] = useState('')


   const handleSubmit = (e) => {
      e.preventDefault()

      const userData = {
         name: newName,
         email: newEmail,
         subject: newSubject,
         message: newMessage
      }

      const resetForm = () => {
         setName('')
         setEmail('')
         setSubject('')
         setMessage('')
      }
      contactSubmit(userData)
         .then(d => {
            console.log('success submitting data', d);
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
   const handleSubjectChange = (event) => {
      setSubject(event.target.value)
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
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleSubjectChange} />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={handleMessageChange}></textarea>
                     </div>

                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           {/* img gif */}
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
                     <br />
                     {email}
                     <br />
                     {city}, {state} <br />
                     <span>{phone}</span>
                  </p>
               </div>

               <div>
                  <img src={pic} alt="closing portrait" width="200" height="200"></img>
               </div>
            </aside>
         </div>
      </section>
   )
}

export default Contact;
