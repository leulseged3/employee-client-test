import axios from 'axios'
const employeeApi = axios.create({
    baseURL: "http://localhost:3000/"
})

export default employeeApi