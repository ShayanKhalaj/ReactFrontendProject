import { CreateSliderRepository, DeleteSliderRepository, GetAllSliderRepository, GetSliderRepository, SearchSliderRepository, UpdateSliderRepository } from "@/repository/SliderRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateSliderService=createAsyncThunk('create/Slider',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateSliderRepository(model)
            return response.data
        }
        else{
            const response = await CreateSliderRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateSliderService=createAsyncThunk('update/Slider',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateSliderRepository(model)
            return response.data
        }
        else{
            const response = await UpdateSliderRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteSliderService=createAsyncThunk('delete/Slider',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteSliderRepository(id)
            return response.data
        }
        else{
            const response = await DeleteSliderRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetSliderService=createAsyncThunk('get/Slider',async(id,header)=>{
    try {
        if(!header){
            const response = await GetSliderRepository(id)
            return response.data
        }
        else{
            const response = await GetSliderRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllSliderService=createAsyncThunk('getall/Slider',async(header)=>{
    try {
        if(!header){
            const response = await GetAllSliderRepository()
            return response.data
        }
        else{
            const response = await GetAllSliderRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchSliderService=createAsyncThunk('search/Slider',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchSliderRepository(model)
            return response.data
        }
        else{
            const response = await SearchSliderRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})