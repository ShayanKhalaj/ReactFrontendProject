import axios from "axios"
import { BASE_URL } from "../../constants"

export const CreateSliderRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.post(`${BASE_URL}/pannel/sliders/create`,model)
            return response.data
        }
        else{
            const response = await axios.post(`${BASE_URL}/pannel/sliders/create`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const UpdateSliderRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.put(`${BASE_URL}/pannel/sliders/update`,model)
            return response.data
        }
        else{
            const response = await axios.put(`${BASE_URL}/pannel/sliders/update`,model,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const DeleteSliderRepository=async(id,header)=>{
    try {
        console.log(id)
        if(!header){
            const response = await axios.delete(`${BASE_URL}/pannel/sliders/delete/${id}`)
            return response.data
        }
        else{
            const response = await axios.delete(`${BASE_URL}/pannel/sliders/delete/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetSliderRepository=async(id,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/sliders/get/${id}`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/sliders/get/${id}`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const GetAllSliderRepository=async(header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/sliders/getall`)
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/sliders/getal`,header)
            return response.data
        }
    } catch (error) {
        return error
    }
}

export const SearchSliderRepository=async(model,header)=>{
    try {
        if(!header){
            const response = await axios.get(`${BASE_URL}/pannel/sliders/search`,{params:model})
            return response.data
        }
        else{
            const response = await axios.get(`${BASE_URL}/pannel/sliders/search`,{params:model},header)
            return response.data
        }
    } catch (error) {
        return error
    }
}