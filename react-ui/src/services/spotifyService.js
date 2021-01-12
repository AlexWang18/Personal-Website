import axios from 'axios'

const baseUrl = 'http://localhost:3002/aboutme/resume'

const resume = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}