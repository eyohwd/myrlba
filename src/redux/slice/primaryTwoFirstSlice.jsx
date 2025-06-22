import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryTwoFirstResults: [],


};

const primaryTwoFirstSlice = createSlice({
    name: "resultp2first",
    initialState,
    reducers: {
        STORE_PRIMARYTWOFIRSTRESULT(state, action) {
            console.log(action.payload);
            state.primaryTwoFirstResults = action.payload.pTwoResults;
        },

       
    },
});

export const { STORE_PRIMARYTWOFIRSTRESULT } = primaryTwoFirstSlice.actions;

export const selectPrimaryTwoFirstResults = (state) => state.resultp2first.primaryTwoFirstResults;



export default primaryTwoFirstSlice.reducer;