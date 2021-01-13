import axios from 'axios'

const baseUrl = 'http://localhost:3002'

const contactSubmit = (userObj) => { //forms
    const request = axios.post(baseUrl + '/contact/api', userObj)

    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getResume = () => {
    const request = axios.get(baseUrl + '/resume')

    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getSOTD = async() => { // song of the day
    const res = await axios.get(baseUrl+'/api/spotify/sotd')
    return res.data //the song
}


export { contactSubmit, getResume, getSOTD }
