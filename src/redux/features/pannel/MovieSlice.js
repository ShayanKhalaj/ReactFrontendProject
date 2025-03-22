import { CreateMovieService, DeleteMovieService, GetAllMovieService, GetMovieService, SearchMovieService, UpdateMovieService } from "@/service/IMovieService"
import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name:'categories',
    initialState:{
        MovieListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setMovieListItems:(state,action)=>{
            state.MovieListItems=action.payload
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
        builder.addCase(CreateMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchMovieService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchMovieService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchMovieService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.MovieListItems=action.payload.data
                return
            }
            else{
                state.MovieListItems=action.payload
                return
            }
        })
    }
})

export const {setMovieListItems,setErrors,setIsLoading}=MovieSlice.actions
export default MovieSlice.reducer