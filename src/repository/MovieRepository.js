import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateMovieRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/movies/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/movies/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateMovieRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/movies/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/movies/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteMovieRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/movies/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/movies/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetMovieRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/movies/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/movies/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllMovieRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/movies/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/movies/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchMovieRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/movies/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/movies/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}