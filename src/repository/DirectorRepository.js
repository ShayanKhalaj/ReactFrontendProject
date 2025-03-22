import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateDirectorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/directors/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/directors/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateDirectorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/directors/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/directors/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteDirectorRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/directors/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/directors/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetDirectorRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/directors/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/directors/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllDirectorRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/directors/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/directors/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchDirectorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/directors/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/directors/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}