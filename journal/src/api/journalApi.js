import axios from 'axios'


const journalApi = axios.create({
    baseUrl: 'https://vue-demo-e57c9-default-rtdb.firebaseio.com'
})

 export default journalApi