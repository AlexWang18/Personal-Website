import axios from 'axios'

const baseUrl = 'http://localhost:3002'

const contactSubmit = (userObj) => { //forms
    const request = axios.post(baseUrl + '/contact/api', userObj)

    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getResume = async () => {
    const request = axios.get(baseUrl + '/resume')

    return request.then(res => res.data)
        .catch(err => console.log(err))

}

/* const create = async (userObj) => {
    const request = await axios.post(baseUrl, userObj)
    console.log(request)
    return request.data
} */

export { contactSubmit, getResume }
