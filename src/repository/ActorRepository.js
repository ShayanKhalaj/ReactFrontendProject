import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateActorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/actors/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/actors/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateActorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/actors/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/actors/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteActorRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/actors/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/actors/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetActorRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/actors/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/actors/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllActorRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/actors/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/actors/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchActorRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/actors/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/actors/search`,{params:model},header)
            return response.data
        }

    } catch (error) {
        return error
    }
}