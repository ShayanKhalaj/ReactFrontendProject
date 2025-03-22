import { CreateDirectorService, DeleteDirectorService, GetAllDirectorService, GetDirectorService, SearchDirectorService, UpdateDirectorService } from "@/service/IDirectorService"
import { createSlice } from "@reduxjs/toolkit"

const directorSlice = createSlice({
    name:'categories',
    initialState:{
        DirectorListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setDirectorListItems:(state,action)=>{
            state.DirectorListItems=action.payload
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
        builder.addCase(CreateDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchDirectorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchDirectorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchDirectorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                
                state.DirectorListItems=action.payload.data
                return
            }
            else{
                state.DirectorListItems=action.payload
                return
            }
        })
    }
})

export const {setDirectorListItems,setErrors,setIsLoading}=directorSlice.actions
export default directorSlice.reducer