import axios from "axios";

const phoneBookInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',

})

export const setToken = token =>{
phoneBookInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const userRegister = async formData => {
    const {data} = await phoneBookInstance.post('/users/signup', formData)
    setToken(data.token)
    return data
}

export const userLogin = async formData => {
    const {data} = await phoneBookInstance.post('/users/login', formData)
    setToken(data.token)
    return data
}

export const userLogout = async () => {
    const {data} = await phoneBookInstance.post('/users/logout')
    return data
}

export const userCurrent = async () => {
    const {data} = await phoneBookInstance.get('/users/current')
    return data
}
