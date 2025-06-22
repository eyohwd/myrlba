import { createSlice } from "@reduxjs/toolkit";

const user =JSON.parse(localStorage.getItem('user'))

const initialState = {
  isLoggedIn: user ? user : false,
  email: null,
  userName: null, 
  userID: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
           console.log(action.payload);
            // distructure can be
            // const {email, userName, userID} = action.payload
            // eg. state.userName = userName,  
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.userID = action.payload.userID;
            console.log(action.payload.email)
        },
        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoggedIn = false;
            state.email = null;
            state.userName = null;
            state.userID = null;
            

        },
    }
});



export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectEmail = (state) => state.auth.email;

export const selectUserName = (state) => state.auth.userName;

export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
