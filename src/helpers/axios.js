import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_URL + '/api/v1/'
console.log(BASE_URL)

var instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
})

export default instance
