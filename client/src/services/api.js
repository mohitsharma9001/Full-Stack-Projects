import axios from "axios"

const url = "http://localhost:8000"
export const addUser = async (data) => {
    try {
        return await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${url}/all`)
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${url}/${id}`)
    } catch (error) {
        console.log(error)
    }
}


export const editUser = async (user, id) => {
    try {
        return await axios.post(`${url}/${id}`, user)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}


export const loginUsers = async () => {
    try {
        return await axios.post(`${url}user/login` )
    } catch (error) {
        console.log(error)
    }
}