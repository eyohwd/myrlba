import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryOneFirstResults: [],


};

const primaryOneFirstSlice = createSlice({
    name: "resultp1first",
    initialState,
    reducers: {
        STORE_PRIMARYONEFIRSTRESULT(state, action) {
            console.log(action.payload);
            state.primaryOneFirstResults = action.payload.pOneResults;
        },

       
    },
});

export const { STORE_PRIMARYONEFIRSTRESULT } = primaryOneFirstSlice.actions;

export const selectPrimaryOneFirstResults = (state) => state.resultp1first.primaryOneFirstResults;



export default primaryOneFirstSlice.reducer;