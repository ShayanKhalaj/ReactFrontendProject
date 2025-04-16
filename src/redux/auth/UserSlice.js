// AdminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false, // وضعیت ادمین
  user: null, // اطلاعات کاربر
};

const userSlice = createSlice({
  name: "user",
  initialState:{
    isAdmin:false,
    user:null
  },
  reducers: {
    setUser(state, action) {
      if(action.payload.role==="admin"){
        state.user = action.payload
        state.isAdmin=true;
      }
      else{
        state.user = action.payload
        state.isAdmin=false
      }
    },
    clearUser(state) {
      state.user = null;
      state.isAdmin = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
