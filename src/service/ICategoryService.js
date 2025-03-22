import { CreateCategoryRepository, DeleteCategoryRepository, GetAllCategoryRepository, GetCategoryRepository, SearchCategoryRepository, UpdateCategoryRepository } from "@/repository/CategoryRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateCategoryService=createAsyncThunk('create/category',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateCategoryRepository(model)
            return response.data
        }
        else{
            const response = await CreateCategoryRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateCategoryService=createAsyncThunk('update/category',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateCategoryRepository(model)
            return response.data
        }
        else{
            const response = await UpdateCategoryRepository(model,header)
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteCategoryService=createAsyncThunk('delete/category',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteCategoryRepository(id)
            return response.data
        }
        else{
            const response = await DeleteCategoryRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetCategoryService=createAsyncThunk('get/category',async(id,header)=>{
    try {
        if(!header){
            const response = await GetCategoryRepository(id)
            return response.data
        }
        else{
            const response = await GetCategoryRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllCategoryService=createAsyncThunk('getall/category',async(header)=>{
    try {
        if(!header){
            const response = await GetAllCategoryRepository()
            return response.data
        }
        else{
            const response = await GetAllCategoryRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchCategoryService=createAsyncThunk('search/category',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchCategoryRepository(model)
            return response.data
        }
        else{
            const response = await SearchCategoryRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})