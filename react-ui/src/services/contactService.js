import axios from 'axios'

const baseUrl = 'http://localhost:3001/contact'

const contactSubmit = (userObj) => {
    axios.post(baseUrl, userObj)
        .then(response => response.data)
        .catch(err => console.log(err))
}

export { contactSubmit, }
