import { CreateSliderService, DeleteSliderService, GetAllSliderService, GetSliderService, SearchSliderService, UpdateSliderService } from "@/service/ISliderService"
import { createSlice } from "@reduxjs/toolkit"

const SliderSlice = createSlice({
    name:'categories',
    initialState:{
        SliderListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setSliderListItems:(state,action)=>{
            state.SliderListItems=action.payload
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
        builder.addCase(CreateSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchSliderService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchSliderService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchSliderService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.SliderListItems=action.payload.data
                return
            }
            else{
                state.SliderListItems=action.payload
                return
            }
        })
    }
})

export const {setSliderListItems,setErrors,setIsLoading}=SliderSlice.actions
export default SliderSlice.reducer