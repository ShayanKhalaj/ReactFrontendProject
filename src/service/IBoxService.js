import { CreateBoxRepository, DeleteBoxRepository, GetAllBoxRepository, GetBoxRepository, SearchBoxRepository, UpdateBoxRepository } from "@/repository/BoxRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateBoxService=createAsyncThunk('create/Box',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateBoxRepository(model)
            return response.data
        }
        else{
            const response = await CreateBoxRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateBoxService=createAsyncThunk('update/Box',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateBoxRepository(model)
            return response.data
        }
        else{
            const response = await UpdateBoxRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteBoxService=createAsyncThunk('delete/Box',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteBoxRepository(id)
            return response.data
        }
        else{
            const response = await DeleteBoxRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetBoxService=createAsyncThunk('get/Box',async(id,header)=>{
    try {
        if(!header){
            const response = await GetBoxRepository(id)
            return response.data
        }
        else{
            const response = await GetBoxRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllBoxService=createAsyncThunk('getall/Box',async(header)=>{
    try {
        if(!header){
            const response = await GetAllBoxRepository()
            return response.data
        }
        else{
            const response = await GetAllBoxRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchBoxService=createAsyncThunk('search/Box',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchBoxRepository(model)
            return response.data
        }
        else{
            const response = await SearchBoxRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})