import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateGenreRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/genres/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/genres/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateGenreRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/genres/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/genres/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteGenreRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/genres/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/genres/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetGenreRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/genres/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/genres/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllGenreRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/genres/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/genres/getall`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchGenreRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/genres/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/genres/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}