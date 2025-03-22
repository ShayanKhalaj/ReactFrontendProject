import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateBoxRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/boxes/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/boxes/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateBoxRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/boxes/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/boxes/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteBoxRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/boxes/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/boxes/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetBoxRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/boxes/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/boxes/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllBoxRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/boxes/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/boxes/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchBoxRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/boxes/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/boxes/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}