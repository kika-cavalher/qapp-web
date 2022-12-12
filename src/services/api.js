import axios from "axios"

const api = axios.create({
    baseURL: "https://api-qapp.herokuapp.com/",
})

export default api;