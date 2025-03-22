import { CreateMovieRepository, DeleteMovieRepository, GetAllMovieRepository, GetMovieRepository, SearchMovieRepository, UpdateMovieRepository } from "@/repository/MovieRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateMovieService=createAsyncThunk('create/Movie',async(model,header)=>{
    try {
        if(!header){
            const response = await CreateMovieRepository(model)
            return response.data
        }
        else{
            const response = await CreateMovieRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const UpdateMovieService=createAsyncThunk('update/Movie',async(model,header)=>{
    try {
        if(!header){
            const response = await UpdateMovieRepository(model)
            return response.data
        }
        else{
            const response = await UpdateMovieRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const DeleteMovieService=createAsyncThunk('delete/Movie',async(id,header)=>{
    try {
        if(!header){
            const response = await DeleteMovieRepository(id)
            return response.data
        }
        else{
            const response = await DeleteMovieRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})


export const GetMovieService=createAsyncThunk('get/Movie',async(id,header)=>{
    try {
        if(!header){
            const response = await GetMovieRepository(id)
            return response.data
        }
        else{
            const response = await GetMovieRepository(id,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const GetAllMovieService=createAsyncThunk('getall/Movie',async(header)=>{
    try {
        if(!header){
            const response = await GetAllMovieRepository()
            return response.data
        }
        else{
            const response = await GetAllMovieRepository(header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const SearchMovieService=createAsyncThunk('search/Movie',async(model,header)=>{
    try {
        if(!header){
            const response = await SearchMovieRepository(model)
            return response.data
        }
        else{
            const response = await SearchMovieRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})