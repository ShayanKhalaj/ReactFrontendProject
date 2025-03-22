import { CreateCategoryService, DeleteCategoryService, GetAllCategoryService, GetCategoryService, SearchCategoryService, UpdateCategoryService } from "@/service/ICategoryService"
import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
    name:'categories',
    initialState:{
        categoryListItems:[],
        isLoading:false,
        errors:null
    },
    reducers:{
        setCategoryListItems:(state,action)=>{
            state.categoryListItems=action.payload
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
        builder.addCase(CreateCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(CreateCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(CreateCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //update area
        builder.addCase(UpdateCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(UpdateCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(UpdateCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //delete area
        builder.addCase(DeleteCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(DeleteCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(DeleteCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //get area
        builder.addCase(GetCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        // getall area
        builder.addCase(GetAllCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(GetAllCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(GetAllCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
        })
        //search area
        builder.addCase(SearchCategoryService.pending,(state,action)=>{
            state.isLoading=true
        }).addCase(SearchCategoryService.rejected,(state,action)=>{
            state.errors=action.payload
            state.isLoading=false
        }).addCase(SearchCategoryService.fulfilled,(state,action)=>{
            state.errors=null,
            state.isLoading=false
            if(action.payload.data){
                state.categoryListItems=action.payload.data
                return
            }
            else{
                state.categoryListItems=action.payload
                return
            }
        })
    }
})

export const {setCategoryListItems,setErrors,setIsLoading}=categorySlice.actions
export default categorySlice.reducer