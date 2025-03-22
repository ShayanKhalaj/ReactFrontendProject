import { CreateGenreRepository, DeleteGenreRepository, GetAllGenreRepository, GetGenreRepository, SearchGenreRepository, UpdateGenreRepository } from "@/repository/GenreRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateGenreService=createAsyncThunk('create/Genre',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateGenreRepository(model)
            return response.data
        }
        else{
            const response = await CreateGenreRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateGenreService=createAsyncThunk('update/Genre',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateGenreRepository(model)
            return response.data
        }
        else{
            const response = await UpdateGenreRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteGenreService=createAsyncThunk('delete/Genre',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteGenreRepository(id)
            return response.data
        }
        else{
            const response = await DeleteGenreRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetGenreService=createAsyncThunk('get/Genre',async(id,header)=>{
    try {
        if(!header){
            const response = await GetGenreRepository(id)
            return response.data
        }
        else{
            const response = await GetGenreRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllGenreService=createAsyncThunk('getall/Genre',async(header)=>{
    try {
        if(!header){
            const response = await GetAllGenreRepository()
            return response.data
        }
        else{
            const response = await GetAllGenreRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchGenreService=createAsyncThunk('search/Genre',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchGenreRepository(model)
            return response.data
        }
        else{
            const response = await SearchGenreRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})