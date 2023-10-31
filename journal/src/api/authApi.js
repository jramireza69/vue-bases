import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyDIHTTQId-iCLmQSWB7nXyMp3OCJeByTQs'
    }
})

export default authApi