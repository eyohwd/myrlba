import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryOneThirdResults: [],


};

const primaryOneThirdSlice = createSlice({
    name: "resultp1third",
    initialState,
    reducers: {
        STORE_PRIMARYONETHIRDRESULT(state, action) {
            console.log(action.payload);
            state.primaryOneThirdResults = action.payload.pOneResults;
        },

       
    },
});

export const { STORE_PRIMARYONETHIRDRESULT } = primaryOneThirdSlice.actions;

export const selectPrimaryOneThirdResults = (state) => state.resultp1third.primaryOneThirdResults;



export default primaryOneThirdSlice.reducer;