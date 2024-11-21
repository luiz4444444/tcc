import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5015'
})

export default api