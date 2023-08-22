import axios from "axios"


export const Api = () => {
    return axios.create({
        baseURL: 'http://192.168.20.17:8080/'
    })
}