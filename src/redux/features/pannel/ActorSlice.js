import { CreateActorService, DeleteActorService, GetAllActorService, GetActorService, SearchActorService, UpdateActorService } from "@/service/IActorService"
import { createSlice } from "@reduxjs/toolkit"

const ActorSlice = createSlice({
    name:'actors',
    initialState:{
        actorListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setActorListItems:(state,action)=>{
            state.actorListItems=action.payload
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
        builder.addCase(CreateActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchActorService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchActorService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchActorService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.actorListItems=action.payload.data
                return
            }
            if(action.payload.data.data){
                state.actorListItems=action.payload.data.data
                return
            }
            else{
                state.actorListItems=action.payload
                return
            }
        })
    }
})

export const {setActorListItems,setErrors,setIsLoading}=ActorSlice.actions
export default ActorSlice.reducer