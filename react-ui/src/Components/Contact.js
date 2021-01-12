import React, { useState } from 'react';
import {contactSubmit} from '../services/serverServices'

const Contact = (props) => {
   var name = props.name;
   var street = props.street;
   var city = props.city;
   var state = props.state;
   var zip = props.zip;
   var phone = props.phone;
   var email = props.email;
   var message = props.contactmessage;
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
      console.log('in')

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

               <p className="lead">{message}</p>

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

               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Contact Info</h4>
                  <p className="address">
                     Alex Wang
                     <br></br>
                      Pittsburgh, PA <br />
                     <span>724-986-8135</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>
   )
}
/*   class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
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
               // resetForm()
            })
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form action="" method="post" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
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

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}  
  */

export default Contact;
