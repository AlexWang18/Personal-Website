import React, { useState } from 'react' //is it good practice to useState outside main home / app file
import { Link } from 'react-router-dom'

import apiServices from '../../services/contactService'

const Info = () => {
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
      
        apiServices.contactSubmit(userData)
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
        <div>
            <p>Contact Me!</p>
            <Form name={newName} email={newEmail} message={newMessage}
                handleSubmit={handleSubmit} onNameChange={handleNameChange} onEmailChange={handleEmailChange} onMessageChange={handleMessageChange}
            />
            <p>Other ways to connect</p>
            <p className="email">Email: alw245@pitt.edu</p>
            <a rel="noopener noreferrer" href="http://twitter.com/notPaff" target="_blank"><img width="90" height="90" src="Twitter_Logo_WhiteOnBlue.png" alt="twitter"></img></a>
            <br></br>
            <a rel="noopener noreferrer" href="https://github.com/AlexWang18" target="_blank"><img width="90" height="90" src="GitHub-Mark-64px.png" alt="twitter"></img></a>

        </div>
    )
}

const Form = (props) => {
    return (
        <form id="contact-form" onSubmit={props.handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={props.name} onChange={props.onNameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={props.email} onChange={props.onEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" id="message" value={props.message} onChange={props.onMessageChange} />
            </div>
            <button type="submit" className="submit button">Submit</button>
        </form>
    )
}

export default Info