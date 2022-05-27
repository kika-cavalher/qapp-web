import axios from "axios"

const api = axios.create({
    baseURL: "https://qapp-api.herokuapp.com",
})

export default api;