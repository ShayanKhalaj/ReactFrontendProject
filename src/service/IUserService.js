import { LoginRepository, RegisterRepository } from "@/repository/UserRepository"

export const RegisterService=createAsyncThunk('search/Register',async(model,header)=>{
    try {
        if(!header){
            const response = await RegisterRepository(model)
            return response.data
        }
        else{
            const response = await RegisterRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const LoginService=createAsyncThunk('search/Login',async(model,header)=>{
    try {
        if(!header){
            const response = await LoginRepository(model)
            return response.data
        }
        else{
            const response = await LoginRepository(model,header)
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
})