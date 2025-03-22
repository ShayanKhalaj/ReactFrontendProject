import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateCategoryRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/categories/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/categories/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateCategoryRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/categories/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/categories/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteCategoryRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/categories/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/categories/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetCategoryRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/categories/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/categories/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllCategoryRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/categories/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/categories/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchCategoryRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/categories/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/categories/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}