import axios from "axios"


const API_CALL = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000
  });

//example
export const User= async (username,password) =>{
    const response = await API_CALL.get("users")
    return response.data
}

//register
export const Register= async (username,password) =>{
    const response = await API_CALL.post("user",{username,password})
    return response.data
}