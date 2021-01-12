import axios from 'axios'

const baseUrl = 'http://localhost:3002/contact/api'

const contactSubmit = (userObj) => { //forms
    const request = axios.post(baseUrl, userObj)
        
    return request.then(response => {
            return response.data
    })
    .catch(err => {
        ('#image-loader').fadeOut();
               ('#message-warning').html(err.message);
	            ('#message-warning').fadeIn();
        console.log(err)
    })
}

/* const create = async (userObj) => {
    const request = await axios.post(baseUrl, userObj)
    console.log(request)
    return request.data
} */

export default contactSubmit
