import { CreateBoxService, DeleteBoxService, GetAllBoxService, GetBoxService, SearchBoxService, UpdateBoxService } from "@/service/IBoxService"
import { createSlice } from "@reduxjs/toolkit"

const BoxSlice = createSlice({
    name:'boxes',
    initialState:{
        BoxListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setBoxListItems:(state,action)=>{
            state.BoxListItems=action.payload
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
        builder.addCase(CreateBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchBoxService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchBoxService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchBoxService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.BoxListItems=action.payload.data
                return
            }
            else{
                state.BoxListItems=action.payload
                return
            }
        })
    }
})

export const {setBoxListItems,setErrors,setIsLoading}=BoxSlice.actions
export default BoxSlice.reducer