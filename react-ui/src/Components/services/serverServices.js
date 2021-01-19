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

const getResume = async () => {
    try{
        const res = await fetch('/download')
        const blob = await res.blob()
        return blob
    }
    catch(e){
        console.log(e)
    }
}

const getSOTD = async() => { // song of the day
    try{
        const res = await axios.get('/api/spotify/sotd')
        return res.data //the song
    }
    catch(e){ //can i use express async errors in a chrome browser app
        console.log(e)
    }
}


export { contactSubmit, getData, getResume, getSOTD }
