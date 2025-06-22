import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  primaryTwoSecondResults: [],


};

const primaryTwoSecondSlice = createSlice({
    name: "resultp2second",
    initialState,
    reducers: {
        STORE_PRIMARYTWOSECONDRESULT(state, action) {
            console.log(action.payload);
            state.primaryTwoSecondResults = action.payload.pTwoResults;
        },

       
    },
});

export const { STORE_PRIMARYTWOSECONDRESULT } = primaryTwoSecondSlice.actions;

export const selectPrimaryTwoSecondResults = (state) => state.resultp2second.primaryTwoSecondResults;



export default primaryTwoSecondSlice.reducer;