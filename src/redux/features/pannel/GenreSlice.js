import { CreateGenreService, DeleteGenreService, GetAllGenreService, GetGenreService, SearchGenreService, UpdateGenreService } from "@/service/IGenreService"
import { createSlice } from "@reduxjs/toolkit"

const GenreSlice = createSlice({
    name:'categories',
    initialState:{
        GenreListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setGenreListItems:(state,action)=>{
            state.GenreListItems=action.payload
        },
        setIsLoading:(state,action)=>{
            state.isLoading=state.isLoading===false?true:false
        },
        setErrors:(state,action)=>{
            state.errors=action.payload
        },
    },
    extraReducers:(builder)=>{
        //create area
        builder.addCase(CreateGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchGenreService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchGenreService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchGenreService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.GenreListItems=action.payload.data
                return
            }
            else{
                state.GenreListItems=action.payload
                return
            }
        })
    }
})

export const {setGenreListItems,setErrors,setIsLoading}=GenreSlice.actions
export default GenreSlice.reducer