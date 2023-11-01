import axios from "axios";

const phoneBookInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})

export const userRegister = async formData => {
    const {data} = await phoneBookInstance.post('/users/signup', formData)
    return data
}

export const userLogin = async formData => {
    const {data} = await phoneBookInstance.post('/users/login', formData)
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
