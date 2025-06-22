import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryTwoThirdResults: [],


};

const primaryTwoThirdSlice = createSlice({
    name: "resultp2third",
    initialState,
    reducers: {
        STORE_PRIMARYTWOTHIRDRESULT(state, action) {
            console.log(action.payload);
            state.primaryTwoThirdResults = action.payload.pTwoResults;
        },

       
    },
});

export const { STORE_PRIMARYTWOTHIRDRESULT } = primaryTwoThirdSlice.actions;

export const selectPrimaryTwoThirdResults = (state) => state.resultp2third.primaryTwoThirdResults;



export default primaryTwoThirdSlice.reducer;