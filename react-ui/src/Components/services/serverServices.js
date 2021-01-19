import axios from 'axios'

const baseUrl = ''

const contactSubmit = (userObj) => { //forms
    const request = axios.post('/contact/api', userObj)

    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getData = () => {
    const request = axios.get(baseUrl + '/data')

    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getResume = () => {
    const request = axios.get(baseUrl + '/download')
    return request.then(res => res.data)
        .catch(err => console.log(err))
}

const getSOTD = async() => { // song of the day
    const res = await axios.get('/api/spotify/sotd')
    return res.data //the song
}


export { contactSubmit, getData, getResume, getSOTD }
