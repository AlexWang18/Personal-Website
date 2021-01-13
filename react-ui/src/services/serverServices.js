import axios from 'axios'

const baseUrl = 'http://localhost:3002'

const starterDate = '2021-01-13T18:34:13.472043' //hard code in for now

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

const getSpotify = async() => {
    const request = await axios.get(baseUrl+'/api/spotify')
    const songs = await request.data
    
    const date = new Date().toISOString()
    const day = parseInt(date.substring(8,10)) - parseInt(starterDate.substring(8,10))
    return songs[day]
}
/* const create = async (userObj) => {
    const request = await axios.post(baseUrl, userObj)
    console.log(request)
    return request.data
} */

export { contactSubmit, getResume, getSpotify }
