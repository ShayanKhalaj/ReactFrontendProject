import { CreateActorRepository, DeleteActorRepository, GetAllActorRepository, GetActorRepository, SearchActorRepository, UpdateActorRepository } from "@/repository/ActorRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateActorService=createAsyncThunk('create/actor',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateActorRepository(model)
            return response.data
        }
        else{
            const response = await CreateActorRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateActorService=createAsyncThunk('update/actor',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateActorRepository(model)
            return response.data
        }
        else{
            const response = await UpdateActorRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteActorService=createAsyncThunk('delete/actor',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteActorRepository(id)
            return response.data
        }
        else{
            const response = await DeleteActorRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetActorService=createAsyncThunk('get/actor',async(id,header)=>{
    try {
        if(!header){
            const response = await GetActorRepository(id)
            return response.data
        }
        else{
            const response = await GetActorRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllActorService=createAsyncThunk('getall/actor',async(header)=>{
    try {
        if(!header){
            const response = await GetAllActorRepository()
            return response.data
        }
        else{
            const response = await GetAllActorRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchActorService=createAsyncThunk('search/actor',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchActorRepository(model)
            return response.data
        }
        else{
            const response = await SearchActorRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})