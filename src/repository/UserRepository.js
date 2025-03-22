import axios from "axios"

export const RegisterRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/users/register`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/users/register`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const LoginRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/users/login`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/users/login`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}