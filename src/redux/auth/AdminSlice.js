// // AdminSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAdmin: false, // وضعیت ادمین
//   user: null, // اطلاعات کاربر
// };

// const adminSlice = createSlice({
//   name: "admin",
//   initialState,
//   reducers: {
//     setUser(state, action) {
//         console.log(action.payload)
//       state.user = action.payload
//       state.isAdmin = action.payload.role;
//     },
//     clearUser(state) {
//       state.user = null;
//       state.isAdmin = false;
//     },
//   },
// });

// export const { setUser, clearUser } = adminSlice.actions;
// export default adminSlice.reducer;
