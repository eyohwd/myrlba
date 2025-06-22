import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryOneSecondResults: [],


};

const primaryOneSecondSlice = createSlice({
    name: "resultp1second",
    initialState,
    reducers: {
        STORE_PRIMARYONESECONDRESULT(state, action) {
            console.log(action.payload);
            state.primaryOneSecondResults = action.payload.pOneResults;
        },

       
    },
});

export const { STORE_PRIMARYONESECONDRESULT } = primaryOneSecondSlice.actions;

export const selectPrimaryOneSecondResults = (state) => state.resultp1second.primaryOneSecondResults;



export default primaryOneSecondSlice.reducer;